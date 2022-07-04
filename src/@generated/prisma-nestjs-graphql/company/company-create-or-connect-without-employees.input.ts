import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyCreateWithoutEmployeesInput } from './company-create-without-employees.input';

@InputType()
export class CompanyCreateOrConnectWithoutEmployeesInput {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    where!: CompanyWhereUniqueInput;

    @Field(() => CompanyCreateWithoutEmployeesInput, {nullable:false})
    create!: CompanyCreateWithoutEmployeesInput;
}
