import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageCreateWithoutJobInput } from './image-create-without-job.input';

@InputType()
export class ImageCreateOrConnectWithoutJobInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateWithoutJobInput, {nullable:false})
    create!: ImageCreateWithoutJobInput;
}
