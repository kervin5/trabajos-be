import { Field, ObjectType } from "@nestjs/graphql";
import { Image as PrismaImage } from "../../../@generated/prisma-nestjs-graphql/image/image.model";

@ObjectType({ description: "a single image" })
export class Image extends PrismaImage {
  @Field(() => String, { nullable: true })
  signedUrl?: string;
}
