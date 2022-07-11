import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/modules/users/models/user.model";

@ObjectType()
export class AuthResponse {
  @Field({ nullable: true })
  accessToken: string;

  @Field(() => User, { nullable: true })
  user: User;
}
