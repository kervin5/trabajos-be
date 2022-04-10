import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';
import { EmployeeInCompanyUpdateWithoutEmployeeInput } from './employee-in-company-update-without-employee.input';
import { EmployeeInCompanyCreateWithoutEmployeeInput } from './employee-in-company-create-without-employee.input';

@InputType()
export class EmployeeInCompanyUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => EmployeeInCompanyWhereUniqueInput, {nullable:false})
    where!: EmployeeInCompanyWhereUniqueInput;

    @Field(() => EmployeeInCompanyUpdateWithoutEmployeeInput, {nullable:false})
    update!: EmployeeInCompanyUpdateWithoutEmployeeInput;

    @Field(() => EmployeeInCompanyCreateWithoutEmployeeInput, {nullable:false})
    create!: EmployeeInCompanyCreateWithoutEmployeeInput;
}
