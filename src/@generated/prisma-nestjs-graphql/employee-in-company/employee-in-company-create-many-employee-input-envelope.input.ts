import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyCreateManyEmployeeInput } from './employee-in-company-create-many-employee.input';

@InputType()
export class EmployeeInCompanyCreateManyEmployeeInputEnvelope {

    @Field(() => [EmployeeInCompanyCreateManyEmployeeInput], {nullable:false})
    data!: Array<EmployeeInCompanyCreateManyEmployeeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
