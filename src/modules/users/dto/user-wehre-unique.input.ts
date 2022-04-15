import { InputType } from "@nestjs/graphql";

import { UserWhereUniqueInput as PrismaUserWhereUniqueInput } from "../../../@generated/prisma-nestjs-graphql/user/user-where-unique.input";

@InputType()
export class UserWhereUniqueInput extends PrismaUserWhereUniqueInput {}
