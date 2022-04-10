import { Module } from "@nestjs/common";
import { DateScalar } from "../common/scalars/date.scalar";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
  providers: [UsersResolver, DateScalar, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
