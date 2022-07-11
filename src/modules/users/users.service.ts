import { Injectable } from "@nestjs/common";
import { SystemRole } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";
import { UserCreateInput } from "src/@generated/prisma-nestjs-graphql/user/user-create.input";
import { UserWhereUniqueInput } from "./dto/user-wehre-unique.input";
import { UserWhereInput } from "./dto/user-where.input";
import {
  addComputedFields,
  addComputedFieldsToMany,
} from "./helpers/computed-fields.helper";
// import { UserWhereUniqueInput } from "src/@generated/prisma-nestjs-graphql/user/user-where-unique.input";
// import { UserWhereInput } from "src/@generated/prisma-nestjs-graphql/user/user-where.input";
import { User } from "./models/user.model";
// import { User } from "src/@generated/prisma-nestjs-graphql/user/user.model";

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(args: UserWhereUniqueInput): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({ where: args });
    return addComputedFields(user, { displayName: true });
  }

  async findMany(args: UserWhereInput): Promise<User[]> {
    const users = await this.prismaService.user.findMany({ where: args });
    return addComputedFieldsToMany(users, { displayName: true });
  }

  async create(args: UserCreateInput): Promise<User> {
    const usersCount = await this.prismaService.user.count();
    const firstUserSettings =
      usersCount === 0 ? { role: SystemRole.ADMIN } : {};

    const user = await this.prismaService.user.create({
      data: { ...args, ...firstUserSettings },
    });

    return addComputedFields(user, { displayName: true });
  }
}
