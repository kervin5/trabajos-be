import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class MapboxLocationFilterInput {
  @Field({ nullable: true })
  locationName?: string;

  @Field({ nullable: true })
  limit?: number;
}
