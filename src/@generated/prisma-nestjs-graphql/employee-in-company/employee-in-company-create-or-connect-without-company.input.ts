import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';
import { EmployeeInCompanyCreateWithoutCompanyInput } from './employee-in-company-create-without-company.input';

@InputType()
export class EmployeeInCompanyCreateOrConnectWithoutCompanyInput {

    @Field(() => EmployeeInCompanyWhereUniqueInput, {nullable:false})
    where!: EmployeeInCompanyWhereUniqueInput;

    @Field(() => EmployeeInCompanyCreateWithoutCompanyInput, {nullable:false})
    create!: EmployeeInCompanyCreateWithoutCompanyInput;
}
