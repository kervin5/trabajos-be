import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { Injectable } from "@nestjs/common";
import { Job } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";
import { JobStatus } from "src/@generated/prisma-nestjs-graphql/prisma/job-status.enum";
import { ConnectionArgs } from "src/common/connection/connection.args";
import { removeStopWords } from "src/common/helpers/utils/text";
import { QueryMode } from "src/common/types/query-mode.type";
import { LocationsService } from "src/modules/locations/locations.service";
import { FindManyJobArgs } from "./dto/find-may-job.args";
import { JobCreateInput } from "./dto/job-create.input";
import { JobOrderByInput } from "./dto/job-order-by.input";
import { JobWhereUniqueInput } from "./dto/job-where-unique.input";
import { JobWhereInput } from "./dto/job-where.input";
import { JobsFilterInput } from "./dto/jobs-filter.input";
import { JobsConnection } from "./jobs.connection";

const jobInclude = {
  author: true,
  location: {
    include: {
      _count: true,
      jobs: {
        include: {
          _count: true,
        },
      },
    },
  },
};

@Injectable()
export class JobsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly locationsService: LocationsService
  ) {}

  findOne(args: JobWhereUniqueInput): Promise<Job | null> {
    // console.log(args)
    return this.prismaService.job.findUnique({
      where: args,
      include: jobInclude,
    });
  }

  findMany(args: JobWhereInput): Promise<Job[]> {
    return this.prismaService.job.findMany({
      where: args,
      include: jobInclude,
    });
  }

  published(): Promise<Job[]> {
    return this.prismaService.job.findMany({
      where: { status: JobStatus.PUBLISHED },
      include: jobInclude,
    });
  }

  async findManyForConnection(
    filter: JobsFilterInput,
    pagination: ConnectionArgs,
    orderBy: JobOrderByInput
  ): Promise<JobsConnection> {
    // return this.prismaService.job.findMany({ where: args });
    // console.log(pagination);

    const queryFilter = await this.getSearchFilter(filter);

    return findManyCursorConnection(
      (connectionArgs) =>
        this.prismaService.job.findMany({
          ...queryFilter,
          orderBy: {
            ...orderBy,
          },
          ...connectionArgs,
          include: jobInclude,
        }),
      () => this.prismaService.job.count(queryFilter),
      pagination
    );
  }

  async findManyByLocation(locationName: string, radius = 10): Promise<Job[]> {
    const location = await this.locationsService.findOrCreateLocationByName(
      locationName
    );

    const result = await this.prismaService.$queryRawUnsafe<Job[]>(
      "SELECT *, point(" +
        location.longitude +
        ", " +
        location.latitude +
        ') <@> point(longitude, latitude)::point as distance FROM "Location" JOIN "Job" ON "Location"."id" = "Job"."locationId" WHERE (point(' +
        location.longitude +
        ", " +
        location.latitude +
        ") <@> point(longitude, latitude)) < " +
        parseInt(`${radius}`) +
        " ORDER BY distance;"
    );

    return this.findMany({ id: { in: result.map((r) => r.id) } });
  }

  async getSearchFilter(
    filter?: JobsFilterInput | null
  ): Promise<FindManyJobArgs> {
    const { locationName, searchString } = filter || {};

    //Filter by location
    const jobsFilteredByLocation = locationName
      ? await this.findManyByLocation(locationName)
      : null;

    const locationFilter = jobsFilteredByLocation
      ? {
          id: { in: jobsFilteredByLocation.map((j) => j.id) },
        }
      : {};

    //Filter by search string
    const text = searchString ? removeStopWords(searchString) : null;
    const tokenizedText =
      text && text.length > 0 ? text.split(" ").join(" | ") : null;

    const textFilter: JobWhereInput =
      tokenizedText && text && text.length > 0
        ? {
            OR: [
              {
                title: {
                  search: tokenizedText,
                },
              },
              {
                title: { contains: text, mode: "insensitive" as QueryMode },
              },
              {
                content: {
                  search: tokenizedText,
                },
              },
              {
                content: {
                  contains: text,
                  mode: "insensitive" as QueryMode,
                },
              },
            ],
          }
        : {};

    return { where: { ...locationFilter, ...textFilter } };
  }

  async create(data: JobCreateInput & { userId: string }): Promise<Job> {
    const location = await this.locationsService.findOrCreateLocationByName(
      data.location
    );

    return this.prismaService.job.create({
      data: {
        title: data.title,
        content: data.content,
        author: {
          connect: {
            id: data.userId,
          },
        },
        location: {
          connect: {
            id: location.id,
          },
        },
      },
    });
  }
}
