import { ArgsType } from "@nestjs/graphql";
import { FindManyUserArgs as PrismaFindManyUserArgs } from "../../../@generated/prisma-nestjs-graphql/user/find-many-user.args";

@ArgsType()
export class FindManyUserArgs extends PrismaFindManyUserArgs {}
