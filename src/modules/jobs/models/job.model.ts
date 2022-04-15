import { Field, ObjectType } from "@nestjs/graphql";
import { Tag } from "src/modules/tags/models/tag.model";
import { User } from "src/modules/users/models/user.model";
import { Location } from "src/modules/locations/models/location.model";
import { Job as PrismaJob } from "../../../@generated/prisma-nestjs-graphql/job/job.model";
import { Company } from "src/modules/companies/models/company.model";
import { Image } from "src/modules/images/models/image.model";

@ObjectType({ description: "a single job" })
export class Job extends PrismaJob {
  @Field((type) => String)
  plainTextContent?: string;

  @Field(() => User)
  author?: User | null;

  @Field(() => [Tag], { nullable: true })
  tags?: Array<Tag>;

  @Field(() => Location, { nullable: true })
  location?: Location | null;

  @Field(() => Company, { nullable: true })
  company?: Company | null;

  @Field(() => [Image], { nullable: true })
  images?: Array<Image>;

  //   @ResolveField()
  //   async posts(@Parent() author: Author) {
  //     const { id } = author;
  //     return this.postsService.findAll({ authorId: id });
  //   }
}
