import { Field, HideField, ObjectType } from "@nestjs/graphql";
import { User as PrismaUser } from "../../../@generated/prisma-nestjs-graphql/user/user.model";
import { Job } from "src/modules/jobs/models/job.model";
import { Tag } from "src/modules/tags/models/tag.model";
import { EmployeeInCompany } from "src/modules/companies/models/employee-in-company.model";

@ObjectType({ description: "a single user" })
export class User extends PrismaUser {
  @Field((type) => [Job])
  jobs?: Job[];

  @Field(() => [Tag], { nullable: true })
  tags?: Array<Tag>;

  @HideField()
  companies?: Array<EmployeeInCompany>;

  @Field(() => String)
  displayName?: string;

  //   @ResolveField()
  //   async posts(@Parent() author: Author) {
  //     const { id } = author;
  //     return this.postsService.findAll({ authorId: id });
  //   }
}
