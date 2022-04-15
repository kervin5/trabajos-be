import { Field, ObjectType } from "@nestjs/graphql";
import { Connection } from "src/common/connection/connection.module";
import { Job } from "./models/job.model";

@ObjectType()
export class JobsConnection extends Connection(Job) {
  @Field(() => [Job])
  nodes: Job[];
}
