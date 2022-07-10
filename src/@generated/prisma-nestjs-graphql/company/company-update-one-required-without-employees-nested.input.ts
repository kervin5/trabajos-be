import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutEmployeesInput } from './company-create-without-employees.input';
import { CompanyCreateOrConnectWithoutEmployeesInput } from './company-create-or-connect-without-employees.input';
import { CompanyUpsertWithoutEmployeesInput } from './company-upsert-without-employees.input';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyUpdateWithoutEmployeesInput } from './company-update-without-employees.input';

@InputType()
export class CompanyUpdateOneRequiredWithoutEmployeesNestedInput {

    @Field(() => CompanyCreateWithoutEmployeesInput, {nullable:true})
    create?: CompanyCreateWithoutEmployeesInput;

    @Field(() => CompanyCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: CompanyCreateOrConnectWithoutEmployeesInput;

    @Field(() => CompanyUpsertWithoutEmployeesInput, {nullable:true})
    upsert?: CompanyUpsertWithoutEmployeesInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    connect?: CompanyWhereUniqueInput;

    @Field(() => CompanyUpdateWithoutEmployeesInput, {nullable:true})
    update?: CompanyUpdateWithoutEmployeesInput;
}
