import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateNestedOneWithoutEmployeesInput } from '../company/company-create-nested-one-without-employees.input';
import { UserCreateNestedOneWithoutCompaniesInput } from '../user/user-create-nested-one-without-companies.input';
import { UserRoleInCompany } from '../user/user-role-in-company.enum';

@InputType()
export class EmployeeInCompanyCreateInput {

    @Field(() => CompanyCreateNestedOneWithoutEmployeesInput, {nullable:false})
    company!: CompanyCreateNestedOneWithoutEmployeesInput;

    @Field(() => UserCreateNestedOneWithoutCompaniesInput, {nullable:false})
    employee!: UserCreateNestedOneWithoutCompaniesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserRoleInCompany, {nullable:true})
    role?: keyof typeof UserRoleInCompany;
}
