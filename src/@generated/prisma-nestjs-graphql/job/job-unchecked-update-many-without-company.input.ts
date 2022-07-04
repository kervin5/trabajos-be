import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutCompanyInput } from './job-create-without-company.input';
import { JobCreateOrConnectWithoutCompanyInput } from './job-create-or-connect-without-company.input';
import { JobUpsertWithWhereUniqueWithoutCompanyInput } from './job-upsert-with-where-unique-without-company.input';
import { JobCreateManyCompanyInputEnvelope } from './job-create-many-company-input-envelope.input';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithWhereUniqueWithoutCompanyInput } from './job-update-with-where-unique-without-company.input';
import { JobUpdateManyWithWhereWithoutCompanyInput } from './job-update-many-with-where-without-company.input';
import { JobScalarWhereInput } from './job-scalar-where.input';

@InputType()
export class JobUncheckedUpdateManyWithoutCompanyInput {

    @Field(() => [JobCreateWithoutCompanyInput], {nullable:true})
    create?: Array<JobCreateWithoutCompanyInput>;

    @Field(() => [JobCreateOrConnectWithoutCompanyInput], {nullable:true})
    connectOrCreate?: Array<JobCreateOrConnectWithoutCompanyInput>;

    @Field(() => [JobUpsertWithWhereUniqueWithoutCompanyInput], {nullable:true})
    upsert?: Array<JobUpsertWithWhereUniqueWithoutCompanyInput>;

    @Field(() => JobCreateManyCompanyInputEnvelope, {nullable:true})
    createMany?: JobCreateManyCompanyInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    set?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    disconnect?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    delete?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    connect?: Array<JobWhereUniqueInput>;

    @Field(() => [JobUpdateWithWhereUniqueWithoutCompanyInput], {nullable:true})
    update?: Array<JobUpdateWithWhereUniqueWithoutCompanyInput>;

    @Field(() => [JobUpdateManyWithWhereWithoutCompanyInput], {nullable:true})
    updateMany?: Array<JobUpdateManyWithWhereWithoutCompanyInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    deleteMany?: Array<JobScalarWhereInput>;
}
