import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyUncheckedCreateNestedManyWithoutCompanyInput } from '../employee-in-company/employee-in-company-unchecked-create-nested-many-without-company.input';

@InputType()
export class CompanyUncheckedCreateWithoutJobsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => EmployeeInCompanyUncheckedCreateNestedManyWithoutCompanyInput, {nullable:true})
    employees?: EmployeeInCompanyUncheckedCreateNestedManyWithoutCompanyInput;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;
}
