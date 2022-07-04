import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithoutJobInput } from './image-update-without-job.input';

@InputType()
export class ImageUpdateWithWhereUniqueWithoutJobInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutJobInput, {nullable:false})
    data!: ImageUpdateWithoutJobInput;
}
