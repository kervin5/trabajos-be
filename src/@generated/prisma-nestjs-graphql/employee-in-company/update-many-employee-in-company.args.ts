import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeInCompanyUpdateManyMutationInput } from './employee-in-company-update-many-mutation.input';
import { EmployeeInCompanyWhereInput } from './employee-in-company-where.input';

@ArgsType()
export class UpdateManyEmployeeInCompanyArgs {

    @Field(() => EmployeeInCompanyUpdateManyMutationInput, {nullable:false})
    data!: EmployeeInCompanyUpdateManyMutationInput;

    @Field(() => EmployeeInCompanyWhereInput, {nullable:true})
    where?: EmployeeInCompanyWhereInput;
}
