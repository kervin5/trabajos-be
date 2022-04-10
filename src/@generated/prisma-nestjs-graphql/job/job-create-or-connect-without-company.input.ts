import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobCreateWithoutCompanyInput } from './job-create-without-company.input';

@InputType()
export class JobCreateOrConnectWithoutCompanyInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobCreateWithoutCompanyInput, {nullable:false})
    create!: JobCreateWithoutCompanyInput;
}
