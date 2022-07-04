import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutEmployeesInput } from './company-create-without-employees.input';
import { CompanyCreateOrConnectWithoutEmployeesInput } from './company-create-or-connect-without-employees.input';
import { CompanyWhereUniqueInput } from './company-where-unique.input';

@InputType()
export class CompanyCreateNestedOneWithoutEmployeesInput {

    @Field(() => CompanyCreateWithoutEmployeesInput, {nullable:true})
    create?: CompanyCreateWithoutEmployeesInput;

    @Field(() => CompanyCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: CompanyCreateOrConnectWithoutEmployeesInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    connect?: CompanyWhereUniqueInput;
}
