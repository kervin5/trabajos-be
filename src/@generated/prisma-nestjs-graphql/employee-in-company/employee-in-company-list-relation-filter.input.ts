import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyWhereInput } from './employee-in-company-where.input';

@InputType()
export class EmployeeInCompanyListRelationFilter {

    @Field(() => EmployeeInCompanyWhereInput, {nullable:true})
    every?: EmployeeInCompanyWhereInput;

    @Field(() => EmployeeInCompanyWhereInput, {nullable:true})
    some?: EmployeeInCompanyWhereInput;

    @Field(() => EmployeeInCompanyWhereInput, {nullable:true})
    none?: EmployeeInCompanyWhereInput;
}
