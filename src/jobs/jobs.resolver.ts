import { UseGuards } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { JobWhereInput } from "src/@generated/prisma-nestjs-graphql/job/job-where.input";
import { Job } from "src/@generated/prisma-nestjs-graphql/job/job.model";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

import { JobsService } from "./jobs.service";
import { JobsConnection } from "./jobs.connection";
import { ConnectionArgs } from "src/common/connection/connection.args";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { JobsFilterInput } from "./dto/jobs-filter.input";
import { FindManyUserArgs } from "src/@generated/prisma-nestjs-graphql/user/find-many-user.args";

@Resolver(() => Job)
export class JobsResolver {
  constructor(private readonly jobsService: JobsService) {}

  @Query(() => JobsConnection)
  async jobs(
    @Args() pagination: ConnectionArgs,
    @Args("filter") filter: JobsFilterInput
  ): Promise<JobsConnection> {
    return this.jobsService.findManyForConnection(filter);
  }

  // @Query(() => [Job])
  // @UseGuards(JwtAuthGuard)
  // jobs(@Args("filter") filter: JobWhereInput): Promise<Job[]> {
  //   return this.jobsService.findMany(filter);
  // }
}
