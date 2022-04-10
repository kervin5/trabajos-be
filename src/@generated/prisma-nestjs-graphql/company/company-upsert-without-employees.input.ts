import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyUpdateWithoutEmployeesInput } from './company-update-without-employees.input';
import { CompanyCreateWithoutEmployeesInput } from './company-create-without-employees.input';

@InputType()
export class CompanyUpsertWithoutEmployeesInput {

    @Field(() => CompanyUpdateWithoutEmployeesInput, {nullable:false})
    update!: CompanyUpdateWithoutEmployeesInput;

    @Field(() => CompanyCreateWithoutEmployeesInput, {nullable:false})
    create!: CompanyCreateWithoutEmployeesInput;
}
