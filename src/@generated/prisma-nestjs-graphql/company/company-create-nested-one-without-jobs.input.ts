import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutJobsInput } from './company-create-without-jobs.input';
import { CompanyCreateOrConnectWithoutJobsInput } from './company-create-or-connect-without-jobs.input';
import { CompanyWhereUniqueInput } from './company-where-unique.input';

@InputType()
export class CompanyCreateNestedOneWithoutJobsInput {

    @Field(() => CompanyCreateWithoutJobsInput, {nullable:true})
    create?: CompanyCreateWithoutJobsInput;

    @Field(() => CompanyCreateOrConnectWithoutJobsInput, {nullable:true})
    connectOrCreate?: CompanyCreateOrConnectWithoutJobsInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    connect?: CompanyWhereUniqueInput;
}
