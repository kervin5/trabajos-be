import { Field, ObjectType } from "@nestjs/graphql";
import { Job } from "src/modules/jobs/models/job.model";
import { User } from "src/modules/users/models/user.model";
import { Tag as PrismaTag } from "../../../@generated/prisma-nestjs-graphql/tag/tag.model";

@ObjectType({ description: "a single tag" })
export class Tag extends PrismaTag {
  @Field(() => [Job], { nullable: true })
  jobs?: Array<Job>;

  @Field(() => User, { nullable: true })
  User?: User | null;
}
