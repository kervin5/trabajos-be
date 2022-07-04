import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyCreateNestedManyWithoutCompanyInput } from '../employee-in-company/employee-in-company-create-nested-many-without-company.input';
import { JobCreateNestedManyWithoutCompanyInput } from '../job/job-create-nested-many-without-company.input';

@InputType()
export class CompanyCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => EmployeeInCompanyCreateNestedManyWithoutCompanyInput, {nullable:true})
    employees?: EmployeeInCompanyCreateNestedManyWithoutCompanyInput;

    @Field(() => JobCreateNestedManyWithoutCompanyInput, {nullable:true})
    jobs?: JobCreateNestedManyWithoutCompanyInput;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;
}
