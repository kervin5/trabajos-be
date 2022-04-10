import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DateScalar } from "../common/scalars/date.scalar";
import { UsersResolver } from "./users.resolver";

@Module({
  providers: [UsersResolver, DateScalar],
})
export class UsersModule {}
