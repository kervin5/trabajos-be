import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/modules/users/users.service";
import { compare, hash } from "bcryptjs";
import { User } from "src/modules/users/models/user.model";
import { RegisterInput } from "./dto/register.input";
import { SystemRole } from "@prisma/client";

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

  async register(
    data: RegisterInput
  ): Promise<{ accessToken: string; user: User }> {
    const hashedPassword = await hash(data.password, 10);

    const user = await this.userService.create({
      ...data,
      password: hashedPassword,
      role: data.isEmployer ? SystemRole.EMPLOYER : SystemRole.CANDIDATE,
    });

    const payload = { email: user.email, sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }

  async verify(token: string): Promise<User | null> {
    const decoded = this.jwtService.verify(token);
    const user = await this.userService.findOne({
      email: decoded.email,
      id: decoded.sub,
    });

    return user;
  }
}
