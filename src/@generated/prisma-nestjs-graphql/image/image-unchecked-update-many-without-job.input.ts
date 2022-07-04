import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutJobInput } from './image-create-without-job.input';
import { ImageCreateOrConnectWithoutJobInput } from './image-create-or-connect-without-job.input';
import { ImageUpsertWithWhereUniqueWithoutJobInput } from './image-upsert-with-where-unique-without-job.input';
import { ImageCreateManyJobInputEnvelope } from './image-create-many-job-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithWhereUniqueWithoutJobInput } from './image-update-with-where-unique-without-job.input';
import { ImageUpdateManyWithWhereWithoutJobInput } from './image-update-many-with-where-without-job.input';
import { ImageScalarWhereInput } from './image-scalar-where.input';

@InputType()
export class ImageUncheckedUpdateManyWithoutJobInput {

    @Field(() => [ImageCreateWithoutJobInput], {nullable:true})
    create?: Array<ImageCreateWithoutJobInput>;

    @Field(() => [ImageCreateOrConnectWithoutJobInput], {nullable:true})
    connectOrCreate?: Array<ImageCreateOrConnectWithoutJobInput>;

    @Field(() => [ImageUpsertWithWhereUniqueWithoutJobInput], {nullable:true})
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutJobInput>;

    @Field(() => ImageCreateManyJobInputEnvelope, {nullable:true})
    createMany?: ImageCreateManyJobInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    set?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    disconnect?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    delete?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    connect?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageUpdateWithWhereUniqueWithoutJobInput], {nullable:true})
    update?: Array<ImageUpdateWithWhereUniqueWithoutJobInput>;

    @Field(() => [ImageUpdateManyWithWhereWithoutJobInput], {nullable:true})
    updateMany?: Array<ImageUpdateManyWithWhereWithoutJobInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    deleteMany?: Array<ImageScalarWhereInput>;
}
