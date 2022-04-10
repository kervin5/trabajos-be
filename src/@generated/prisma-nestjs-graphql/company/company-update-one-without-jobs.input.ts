import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutJobsInput } from './company-create-without-jobs.input';
import { CompanyCreateOrConnectWithoutJobsInput } from './company-create-or-connect-without-jobs.input';
import { CompanyUpsertWithoutJobsInput } from './company-upsert-without-jobs.input';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyUpdateWithoutJobsInput } from './company-update-without-jobs.input';

@InputType()
export class CompanyUpdateOneWithoutJobsInput {

    @Field(() => CompanyCreateWithoutJobsInput, {nullable:true})
    create?: CompanyCreateWithoutJobsInput;

    @Field(() => CompanyCreateOrConnectWithoutJobsInput, {nullable:true})
    connectOrCreate?: CompanyCreateOrConnectWithoutJobsInput;

    @Field(() => CompanyUpsertWithoutJobsInput, {nullable:true})
    upsert?: CompanyUpsertWithoutJobsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    connect?: CompanyWhereUniqueInput;

    @Field(() => CompanyUpdateWithoutJobsInput, {nullable:true})
    update?: CompanyUpdateWithoutJobsInput;
}
