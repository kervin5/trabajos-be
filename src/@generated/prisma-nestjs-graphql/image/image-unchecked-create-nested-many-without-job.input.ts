import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutJobInput } from './image-create-without-job.input';
import { ImageCreateOrConnectWithoutJobInput } from './image-create-or-connect-without-job.input';
import { ImageCreateManyJobInputEnvelope } from './image-create-many-job-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageUncheckedCreateNestedManyWithoutJobInput {

    @Field(() => [ImageCreateWithoutJobInput], {nullable:true})
    create?: Array<ImageCreateWithoutJobInput>;

    @Field(() => [ImageCreateOrConnectWithoutJobInput], {nullable:true})
    connectOrCreate?: Array<ImageCreateOrConnectWithoutJobInput>;

    @Field(() => ImageCreateManyJobInputEnvelope, {nullable:true})
    createMany?: ImageCreateManyJobInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    connect?: Array<ImageWhereUniqueInput>;
}
