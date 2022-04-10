import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeInCompanyWhereInput } from './employee-in-company-where.input';

@ArgsType()
export class DeleteManyEmployeeInCompanyArgs {

    @Field(() => EmployeeInCompanyWhereInput, {nullable:true})
    where?: EmployeeInCompanyWhereInput;
}
