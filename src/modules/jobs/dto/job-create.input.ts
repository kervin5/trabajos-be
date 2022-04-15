import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class JobCreateInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  location: string;

  @Field(() => [String], { nullable: true })
  tags: Array<string>;
}
