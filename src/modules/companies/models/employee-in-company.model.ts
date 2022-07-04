import { Field, ObjectType } from "@nestjs/graphql";
import { Job } from "src/modules/jobs/models/job.model";
import { User } from "src/modules/users/models/user.model";

import { EmployeeInCompany as PrismaEmployeeInCompany } from "../../../@generated/prisma-nestjs-graphql/employee-in-company/employee-in-company.model";
import { Company } from "./company.model";

@ObjectType({ description: "a single tag" })
export class EmployeeInCompany extends PrismaEmployeeInCompany {
  @Field(() => Company, { nullable: false })
  company?: Company;

  @Field(() => User, { nullable: false })
  employee?: User;
}
