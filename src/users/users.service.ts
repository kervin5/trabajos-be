import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UserWhereUniqueInput } from "src/@generated/prisma-nestjs-graphql/user/user-where-unique.input";
import { UserWhereInput } from "src/@generated/prisma-nestjs-graphql/user/user-where.input";
import { User } from "src/@generated/prisma-nestjs-graphql/user/user.model";

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  findOne(args: UserWhereUniqueInput): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: args });
  }

  findMany(args: UserWhereInput): Promise<User[]> {
    return this.prismaService.user.findMany({ where: args });
  }
}
