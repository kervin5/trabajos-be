import { InputType } from "@nestjs/graphql";

import { UserWhereInput as PrismaUserWhereInput } from "../../../@generated/prisma-nestjs-graphql/user/user-where.input";

@InputType()
export class UserWhereInput extends PrismaUserWhereInput {}
