import { UseGuards } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { JobWhereInput } from "src/@generated/prisma-nestjs-graphql/job/job-where.input";
import { Job } from "src/@generated/prisma-nestjs-graphql/job/job.model";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { JobsService } from "./jobs.service";

@Resolver(() => Job)
export class JobsResolver {
  constructor(private readonly jobsService: JobsService) {}

  @Query(() => [Job])
  @UseGuards(JwtAuthGuard)
  jobs(@Args("filter") filter: JobWhereInput): Promise<Job[]> {
    return this.jobsService.findMany(filter);
  }
}
