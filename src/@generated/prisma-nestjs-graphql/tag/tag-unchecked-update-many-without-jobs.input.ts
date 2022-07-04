import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutJobsInput } from './tag-create-without-jobs.input';
import { TagCreateOrConnectWithoutJobsInput } from './tag-create-or-connect-without-jobs.input';
import { TagUpsertWithWhereUniqueWithoutJobsInput } from './tag-upsert-with-where-unique-without-jobs.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutJobsInput } from './tag-update-with-where-unique-without-jobs.input';
import { TagUpdateManyWithWhereWithoutJobsInput } from './tag-update-many-with-where-without-jobs.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUncheckedUpdateManyWithoutJobsInput {

    @Field(() => [TagCreateWithoutJobsInput], {nullable:true})
    create?: Array<TagCreateWithoutJobsInput>;

    @Field(() => [TagCreateOrConnectWithoutJobsInput], {nullable:true})
    connectOrCreate?: Array<TagCreateOrConnectWithoutJobsInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutJobsInput], {nullable:true})
    upsert?: Array<TagUpsertWithWhereUniqueWithoutJobsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    set?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    disconnect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    delete?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    connect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutJobsInput], {nullable:true})
    update?: Array<TagUpdateWithWhereUniqueWithoutJobsInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutJobsInput], {nullable:true})
    updateMany?: Array<TagUpdateManyWithWhereWithoutJobsInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    deleteMany?: Array<TagScalarWhereInput>;
}
