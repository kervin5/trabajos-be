import { ArgsType } from "@nestjs/graphql";
import { FindManyJobArgs as PrismaFindMayJobArgs } from "../../../@generated/prisma-nestjs-graphql/job/find-many-job.args";

@ArgsType()
export class FindManyJobArgs extends PrismaFindMayJobArgs {}
