import { Field, ID, InterfaceType, ObjectType } from "@nestjs/graphql";
import { Job } from "src/@generated/prisma-nestjs-graphql/job/job.model";
import { Connection } from "src/common/connection/connection.module";

@ObjectType()
export class JobsConnection extends Connection(Job) {
  @Field(() => [Job])
  nodes: Job[];
}
