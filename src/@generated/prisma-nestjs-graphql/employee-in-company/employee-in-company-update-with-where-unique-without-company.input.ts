import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';
import { EmployeeInCompanyUpdateWithoutCompanyInput } from './employee-in-company-update-without-company.input';

@InputType()
export class EmployeeInCompanyUpdateWithWhereUniqueWithoutCompanyInput {

    @Field(() => EmployeeInCompanyWhereUniqueInput, {nullable:false})
    where!: EmployeeInCompanyWhereUniqueInput;

    @Field(() => EmployeeInCompanyUpdateWithoutCompanyInput, {nullable:false})
    data!: EmployeeInCompanyUpdateWithoutCompanyInput;
}
