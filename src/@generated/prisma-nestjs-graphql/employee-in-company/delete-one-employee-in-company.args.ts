import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';

@ArgsType()
export class DeleteOneEmployeeInCompanyArgs {

    @Field(() => EmployeeInCompanyWhereUniqueInput, {nullable:false})
    where!: EmployeeInCompanyWhereUniqueInput;
}
