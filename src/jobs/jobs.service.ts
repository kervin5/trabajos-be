import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FindManyJobArgs } from "src/@generated/prisma-nestjs-graphql/job/find-many-job.args";
import { JobWhereUniqueInput } from "src/@generated/prisma-nestjs-graphql/job/job-where-unique.input";
import { JobWhereInput } from "src/@generated/prisma-nestjs-graphql/job/job-where.input";
import { Job } from "src/@generated/prisma-nestjs-graphql/job/job.model";
import { removeStopWords } from "src/common/helpers/utils/text";
import { QueryMode } from "src/common/types/query-mode.type";
import { LocationsService } from "src/locations/locations.service";
import { JobsFilterInput } from "./dto/jobs-filter.input";
import { JobsConnection } from "./jobs.connection";

@Injectable()
export class JobsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly locationsService: LocationsService
  ) {}

  findOne(args: JobWhereUniqueInput): Promise<Job | null> {
    return this.prismaService.job.findUnique({ where: args });
  }

  findMany(args: JobWhereInput): Promise<Job[]> {
    return this.prismaService.job.findMany({ where: args });
  }

  async findManyForConnection(
    filter: JobsFilterInput
  ): Promise<JobsConnection> {
    // return this.prismaService.job.findMany({ where: args });

    const queryFilter = await this.getSearchFilter(filter);

    return findManyCursorConnection(
      (connectionArgs) =>
        this.prismaService.job.findMany({
          ...queryFilter,
          // orderBy: {
          //   updatedAt: orderBy?.updatedAt || undefined,
          //   createdAt: orderBy?.createdAt || undefined,
          // },
          ...connectionArgs,
          include: {
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
          },
        }),
      () => this.prismaService.job.count(queryFilter),
      {}
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
}
