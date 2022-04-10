import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithoutCompanyInput } from './job-update-without-company.input';
import { JobCreateWithoutCompanyInput } from './job-create-without-company.input';

@InputType()
export class JobUpsertWithWhereUniqueWithoutCompanyInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobUpdateWithoutCompanyInput, {nullable:false})
    update!: JobUpdateWithoutCompanyInput;

    @Field(() => JobCreateWithoutCompanyInput, {nullable:false})
    create!: JobCreateWithoutCompanyInput;
}
