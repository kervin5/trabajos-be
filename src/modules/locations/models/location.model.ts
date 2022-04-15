import { Field, ObjectType } from "@nestjs/graphql";
import { Job } from "src/modules/jobs/models/job.model";
import { Location as PrismaLocation } from "../../../@generated/prisma-nestjs-graphql/location/location.model";

@ObjectType({ description: "a single location" })
export class Location extends PrismaLocation {
  @Field(() => [Job], { nullable: true })
  jobs?: Array<Job>;
}
