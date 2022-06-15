import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import { JobsService } from "./jobs.service";
import { JobsConnection } from "./jobs.connection";
import { ConnectionArgs } from "src/common/connection/connection.args";
import { JobsFilterInput } from "./dto/jobs-filter.input";
import { Job } from "./models/job.model";
import { htmlToPlainText } from "src/common/helpers/utils/text";
import { JobCreateInput } from "./dto/job-create.input";
import { CurrentUser } from "../auth/current-user.decorator";
import { User } from "../users/models/user.model";
import { JobOrderByInput } from "./dto/job-order-by.input";

@Resolver(() => Job)
export class JobsResolver {
  constructor(private readonly jobsService: JobsService) {}

  @Query(() => Job)
  async job(@Args("id") id: string): Promise<Job> {
    return this.jobsService.findOne({ id });
  }

  @Query(() => JobsConnection)
  async jobs(
    @Args("filter", { nullable: true }) filter: JobsFilterInput,
    @Args("orderBy", { nullable: true }) orderBy: JobOrderByInput,
    @Args() pagination: ConnectionArgs
  ): Promise<JobsConnection> {
    return this.jobsService.findManyForConnection(filter, pagination, orderBy);
  }

  @Query(() => [Job])
  async publishedJobs(): Promise<Job[]> {
    return this.jobsService.published();
  }

  //Mutations
  @Mutation(() => Job)
  async createJob(
    @Args("data") data: JobCreateInput,
    @CurrentUser() user: User
  ): Promise<Job> {
    const job = await this.jobsService.create({
      ...data,
      userId: user.id,
    });

    return job;
  }

  //Computed fields
  @ResolveField("plainTextContent", () => Date, {
    description: "User Profile Last Online",
    nullable: true,
  })
  plainTextContent(
    @Parent()
    job: Job
  ): string {
    const { content } = job;
    return htmlToPlainText(content);
  }

  // @Query(() => [Job])
  // @UseGuards(JwtAuthGuard)
  // jobs(@Args("filter") filter: JobWhereInput): Promise<Job[]> {
  //   return this.jobsService.findMany(filter);
  // }
}
