import { Field, InputType } from "@nestjs/graphql";
import { JobStatus } from "src/@generated/prisma-nestjs-graphql/prisma/job-status.enum";

@InputType()
export class JobCreateInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  location: string;

  @Field(() => [String], { nullable: true })
  tags: Array<string>;

  @Field(()=> JobStatus,{nullable: true})
  status: JobStatus
}
