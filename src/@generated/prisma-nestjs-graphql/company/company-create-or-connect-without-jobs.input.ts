import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyCreateWithoutJobsInput } from './company-create-without-jobs.input';

@InputType()
export class CompanyCreateOrConnectWithoutJobsInput {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    where!: CompanyWhereUniqueInput;

    @Field(() => CompanyCreateWithoutJobsInput, {nullable:false})
    create!: CompanyCreateWithoutJobsInput;
}
