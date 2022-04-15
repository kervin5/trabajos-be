import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { JobsService } from "./jobs.service";
import { JobsConnection } from "./jobs.connection";
import { ConnectionArgs } from "src/common/connection/connection.args";
import { JobsFilterInput } from "./dto/jobs-filter.input";
import { Job } from "./models/job.model";
import { htmlToPlainText } from "src/common/helpers/utils/text";

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
    @Args() pagination: ConnectionArgs
  ): Promise<JobsConnection> {
    return this.jobsService.findManyForConnection(filter, pagination);
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
