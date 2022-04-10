import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/@generated/prisma-nestjs-graphql/user/user.model";
import { UsersService } from "src/users/users.service";
import { jwtSecret } from "./constants";
import { compare } from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validate(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({ email });

    if (!user) {
      return null;
    } else {
      const passwordIsValid = await compare(password, user.password);
      return passwordIsValid ? user : null;
    }
  }

  login(user: User): { accessToken: string; user: User } {
    const payload = { email: user.email, sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }

  async verify(token: string): Promise<User | null> {
    const decoded = this.jwtService.verify(token, { secret: jwtSecret });
    const user = await this.userService.findOne({
      email: decoded.email,
      id: decoded.sub,
    });

    return user;
  }
}
