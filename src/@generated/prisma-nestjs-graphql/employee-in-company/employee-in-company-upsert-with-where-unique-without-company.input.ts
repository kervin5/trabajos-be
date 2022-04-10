import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';
import { EmployeeInCompanyUpdateWithoutCompanyInput } from './employee-in-company-update-without-company.input';
import { EmployeeInCompanyCreateWithoutCompanyInput } from './employee-in-company-create-without-company.input';

@InputType()
export class EmployeeInCompanyUpsertWithWhereUniqueWithoutCompanyInput {

    @Field(() => EmployeeInCompanyWhereUniqueInput, {nullable:false})
    where!: EmployeeInCompanyWhereUniqueInput;

    @Field(() => EmployeeInCompanyUpdateWithoutCompanyInput, {nullable:false})
    update!: EmployeeInCompanyUpdateWithoutCompanyInput;

    @Field(() => EmployeeInCompanyCreateWithoutCompanyInput, {nullable:false})
    create!: EmployeeInCompanyCreateWithoutCompanyInput;
}
