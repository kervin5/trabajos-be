import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';
import { EmployeeInCompanyCreateWithoutEmployeeInput } from './employee-in-company-create-without-employee.input';

@InputType()
export class EmployeeInCompanyCreateOrConnectWithoutEmployeeInput {

    @Field(() => EmployeeInCompanyWhereUniqueInput, {nullable:false})
    where!: EmployeeInCompanyWhereUniqueInput;

    @Field(() => EmployeeInCompanyCreateWithoutEmployeeInput, {nullable:false})
    create!: EmployeeInCompanyCreateWithoutEmployeeInput;
}
