import { Field, HideField, ObjectType } from "@nestjs/graphql";
import { LocationCount } from "src/@generated/prisma-nestjs-graphql/location/location-count.output";
import { Job } from "src/modules/jobs/models/job.model";
import { Location as PrismaLocation } from "../../../@generated/prisma-nestjs-graphql/location/location.model";

@ObjectType({ description: "a single location" })
export class Location extends PrismaLocation {
  @Field(() => [Job], { nullable: true })
  jobs?: Array<Job>;
}
