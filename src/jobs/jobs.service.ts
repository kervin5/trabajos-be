import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { JobWhereUniqueInput } from "src/@generated/prisma-nestjs-graphql/job/job-where-unique.input";
import { JobWhereInput } from "src/@generated/prisma-nestjs-graphql/job/job-where.input";
import { Job } from "src/@generated/prisma-nestjs-graphql/job/job.model";

@Injectable()
export class JobsService {
  constructor(private readonly prismaService: PrismaService) {}

  findOne(args: JobWhereUniqueInput): Promise<Job | null> {
    return this.prismaService.job.findUnique({ where: args });
  }

  findMany(args: JobWhereInput): Promise<Job[]> {
    return this.prismaService.job.findMany({ where: args });
  }
}
