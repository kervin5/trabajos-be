import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithoutCompanyInput } from './job-update-without-company.input';

@InputType()
export class JobUpdateWithWhereUniqueWithoutCompanyInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobUpdateWithoutCompanyInput, {nullable:false})
    data!: JobUpdateWithoutCompanyInput;
}
