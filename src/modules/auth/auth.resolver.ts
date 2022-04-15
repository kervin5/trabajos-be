import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { User } from "src/modules/users/models/user.model";
import { AuthService } from "./auth.service";
import { CurrentUser } from "./current-user.decorator";
import { LoginResponse } from "./dto/login-response";
import { LoginInput } from "./dto/login.input";
import { LocalAuthGuard } from "./guards/local-auth-guard";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(LocalAuthGuard)
  async login(
    @Args("data") _data: LoginInput,
    @CurrentUser() user: User
  ): Promise<LoginResponse> {
    return this.authService.login(user);
  }
}
