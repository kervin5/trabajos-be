import { UseGuards } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { Job } from "src/@generated/prisma-nestjs-graphql/job/job.model";
import { UserWhereInput } from "src/@generated/prisma-nestjs-graphql/user/user-where.input";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { JobsService } from "./jobs.service";

@Resolver(() => Job)
export class JobsResolver {
  constructor(private readonly jobsService: JobsService) {}

  @Query(() => [Job])
  @UseGuards(JwtAuthGuard)
  jobs(@Args() filter: UserWhereInput): Promise<Job[]> {
    return this.jobsService.findMany(filter);
  }
}
