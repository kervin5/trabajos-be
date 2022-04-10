import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyUpdateWithoutJobsInput } from './company-update-without-jobs.input';
import { CompanyCreateWithoutJobsInput } from './company-create-without-jobs.input';

@InputType()
export class CompanyUpsertWithoutJobsInput {

    @Field(() => CompanyUpdateWithoutJobsInput, {nullable:false})
    update!: CompanyUpdateWithoutJobsInput;

    @Field(() => CompanyCreateWithoutJobsInput, {nullable:false})
    create!: CompanyCreateWithoutJobsInput;
}
