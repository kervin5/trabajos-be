import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutCompanyInput } from './job-create-without-company.input';
import { JobCreateOrConnectWithoutCompanyInput } from './job-create-or-connect-without-company.input';
import { JobCreateManyCompanyInputEnvelope } from './job-create-many-company-input-envelope.input';
import { JobWhereUniqueInput } from './job-where-unique.input';

@InputType()
export class JobUncheckedCreateNestedManyWithoutCompanyInput {

    @Field(() => [JobCreateWithoutCompanyInput], {nullable:true})
    create?: Array<JobCreateWithoutCompanyInput>;

    @Field(() => [JobCreateOrConnectWithoutCompanyInput], {nullable:true})
    connectOrCreate?: Array<JobCreateOrConnectWithoutCompanyInput>;

    @Field(() => JobCreateManyCompanyInputEnvelope, {nullable:true})
    createMany?: JobCreateManyCompanyInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    connect?: Array<JobWhereUniqueInput>;
}
