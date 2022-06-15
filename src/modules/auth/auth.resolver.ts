import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { User } from "src/modules/users/models/user.model";
import { AuthService } from "./auth.service";
import { CurrentUser } from "./current-user.decorator";
import { AuthResponse } from "./dto/auth-response";
import { LoginInput } from "./dto/login.input";
import { RegisterInput } from "./dto/register.input";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { LocalAuthGuard } from "./guards/local-auth-guard";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  async identify(@CurrentUser() user: User): Promise<User> {
    return user;
  }

  @Mutation(() => AuthResponse)
  @UseGuards(LocalAuthGuard)
  async login(
    @Args("data") _data: LoginInput,
    @CurrentUser() user: User
  ): Promise<AuthResponse> {
    return this.authService.login(user);
  }

  @Mutation(() => AuthResponse)
  async register(@Args("data") _data: RegisterInput): Promise<AuthResponse> {
    return this.authService.register(_data);
  }
}
