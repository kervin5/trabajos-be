import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeInCompanyCreateInput } from './employee-in-company-create.input';

@ArgsType()
export class CreateOneEmployeeInCompanyArgs {

    @Field(() => EmployeeInCompanyCreateInput, {nullable:false})
    data!: EmployeeInCompanyCreateInput;
}
