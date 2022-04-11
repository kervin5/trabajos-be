import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator";
import { JobWhereInput } from "src/@generated/prisma-nestjs-graphql/job/job-where.input";

@InputType()
export class JobsFilterInput extends JobWhereInput {
  @Field({ nullable: true })
  searchString?: string;

  @Field({ nullable: true })
  locationName?: string;
}
