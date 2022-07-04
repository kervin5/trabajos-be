import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithoutJobInput } from './image-update-without-job.input';
import { ImageCreateWithoutJobInput } from './image-create-without-job.input';

@InputType()
export class ImageUpsertWithWhereUniqueWithoutJobInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutJobInput, {nullable:false})
    update!: ImageUpdateWithoutJobInput;

    @Field(() => ImageCreateWithoutJobInput, {nullable:false})
    create!: ImageCreateWithoutJobInput;
}
