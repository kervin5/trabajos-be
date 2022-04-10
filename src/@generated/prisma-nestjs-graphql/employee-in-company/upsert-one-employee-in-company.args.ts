import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';
import { EmployeeInCompanyCreateInput } from './employee-in-company-create.input';
import { EmployeeInCompanyUpdateInput } from './employee-in-company-update.input';

@ArgsType()
export class UpsertOneEmployeeInCompanyArgs {

    @Field(() => EmployeeInCompanyWhereUniqueInput, {nullable:false})
    where!: EmployeeInCompanyWhereUniqueInput;

    @Field(() => EmployeeInCompanyCreateInput, {nullable:false})
    create!: EmployeeInCompanyCreateInput;

    @Field(() => EmployeeInCompanyUpdateInput, {nullable:false})
    update!: EmployeeInCompanyUpdateInput;
}
