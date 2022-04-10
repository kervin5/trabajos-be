import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateNestedManyWithoutCompanyInput } from '../job/job-create-nested-many-without-company.input';

@InputType()
export class CompanyCreateWithoutEmployeesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => JobCreateNestedManyWithoutCompanyInput, {nullable:true})
    jobs?: JobCreateNestedManyWithoutCompanyInput;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;
}
