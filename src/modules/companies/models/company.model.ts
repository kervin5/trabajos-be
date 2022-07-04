import { Field, ObjectType } from "@nestjs/graphql";
import { Job } from "src/modules/jobs/models/job.model";

import { Company as PrismaCompany } from "../../../@generated/prisma-nestjs-graphql/company/company.model";

@ObjectType({ description: "a single tag" })
export class Company extends PrismaCompany {
  @Field(() => [Job], { nullable: true })
  jobs?: Array<Job>;
  //   @Field(() => [Job], { nullable: true })
  //   jobs?: Array<Job>;
  //   @Field(() => User, { nullable: true })
  //   User?: User | null;
}
