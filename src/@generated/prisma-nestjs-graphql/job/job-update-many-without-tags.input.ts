import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutTagsInput } from './job-create-without-tags.input';
import { JobCreateOrConnectWithoutTagsInput } from './job-create-or-connect-without-tags.input';
import { JobUpsertWithWhereUniqueWithoutTagsInput } from './job-upsert-with-where-unique-without-tags.input';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithWhereUniqueWithoutTagsInput } from './job-update-with-where-unique-without-tags.input';
import { JobUpdateManyWithWhereWithoutTagsInput } from './job-update-many-with-where-without-tags.input';
import { JobScalarWhereInput } from './job-scalar-where.input';

@InputType()
export class JobUpdateManyWithoutTagsInput {

    @Field(() => [JobCreateWithoutTagsInput], {nullable:true})
    create?: Array<JobCreateWithoutTagsInput>;

    @Field(() => [JobCreateOrConnectWithoutTagsInput], {nullable:true})
    connectOrCreate?: Array<JobCreateOrConnectWithoutTagsInput>;

    @Field(() => [JobUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    upsert?: Array<JobUpsertWithWhereUniqueWithoutTagsInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    set?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    disconnect?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    delete?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    connect?: Array<JobWhereUniqueInput>;

    @Field(() => [JobUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    update?: Array<JobUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [JobUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    updateMany?: Array<JobUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    deleteMany?: Array<JobScalarWhereInput>;
}
