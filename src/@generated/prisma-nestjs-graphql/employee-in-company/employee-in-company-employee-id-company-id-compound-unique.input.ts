import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EmployeeInCompanyEmployeeIdCompanyIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => String, {nullable:false})
    companyId!: string;
}
