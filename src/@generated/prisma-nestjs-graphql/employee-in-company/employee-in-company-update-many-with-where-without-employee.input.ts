import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyScalarWhereInput } from './employee-in-company-scalar-where.input';
import { EmployeeInCompanyUpdateManyMutationInput } from './employee-in-company-update-many-mutation.input';

@InputType()
export class EmployeeInCompanyUpdateManyWithWhereWithoutEmployeeInput {

    @Field(() => EmployeeInCompanyScalarWhereInput, {nullable:false})
    where!: EmployeeInCompanyScalarWhereInput;

    @Field(() => EmployeeInCompanyUpdateManyMutationInput, {nullable:false})
    data!: EmployeeInCompanyUpdateManyMutationInput;
}
