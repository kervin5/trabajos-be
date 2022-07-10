import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutAuthorInput } from './job-create-without-author.input';
import { JobCreateOrConnectWithoutAuthorInput } from './job-create-or-connect-without-author.input';
import { JobUpsertWithWhereUniqueWithoutAuthorInput } from './job-upsert-with-where-unique-without-author.input';
import { JobCreateManyAuthorInputEnvelope } from './job-create-many-author-input-envelope.input';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithWhereUniqueWithoutAuthorInput } from './job-update-with-where-unique-without-author.input';
import { JobUpdateManyWithWhereWithoutAuthorInput } from './job-update-many-with-where-without-author.input';
import { JobScalarWhereInput } from './job-scalar-where.input';

@InputType()
export class JobUncheckedUpdateManyWithoutAuthorNestedInput {

    @Field(() => [JobCreateWithoutAuthorInput], {nullable:true})
    create?: Array<JobCreateWithoutAuthorInput>;

    @Field(() => [JobCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<JobCreateOrConnectWithoutAuthorInput>;

    @Field(() => [JobUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<JobUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => JobCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: JobCreateManyAuthorInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    set?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    disconnect?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    delete?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    connect?: Array<JobWhereUniqueInput>;

    @Field(() => [JobUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<JobUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [JobUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<JobUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    deleteMany?: Array<JobScalarWhereInput>;
}
