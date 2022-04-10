import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeInCompanyUpdateInput } from './employee-in-company-update.input';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';

@ArgsType()
export class UpdateOneEmployeeInCompanyArgs {

    @Field(() => EmployeeInCompanyUpdateInput, {nullable:false})
    data!: EmployeeInCompanyUpdateInput;

    @Field(() => EmployeeInCompanyWhereUniqueInput, {nullable:false})
    where!: EmployeeInCompanyWhereUniqueInput;
}
