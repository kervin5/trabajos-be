import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyEmployeeIdCompanyIdCompoundUniqueInput } from './employee-in-company-employee-id-company-id-compound-unique.input';

@InputType()
export class EmployeeInCompanyWhereUniqueInput {

    @Field(() => EmployeeInCompanyEmployeeIdCompanyIdCompoundUniqueInput, {nullable:true})
    employeeId_companyId?: EmployeeInCompanyEmployeeIdCompanyIdCompoundUniqueInput;
}
