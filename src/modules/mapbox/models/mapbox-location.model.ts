import { Field, Float, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "a single mapbox location" })
export class MapboxLocation {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Float)
  latitude: number;

  @Field(() => Float)
  longitude: number;
}
