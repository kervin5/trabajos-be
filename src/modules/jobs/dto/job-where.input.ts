import { InputType } from "@nestjs/graphql";
import { JobWhereInput as PrismaJobWhereInput } from "../../../@generated/prisma-nestjs-graphql/job/job-where.input";

@InputType()
export class JobWhereInput extends PrismaJobWhereInput {}
