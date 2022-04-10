import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyUpdateOneRequiredWithoutEmployeesInput } from '../company/company-update-one-required-without-employees.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumUserRoleInCompanyFieldUpdateOperationsInput } from '../prisma/enum-user-role-in-company-field-update-operations.input';

@InputType()
export class EmployeeInCompanyUpdateWithoutEmployeeInput {

    @Field(() => CompanyUpdateOneRequiredWithoutEmployeesInput, {nullable:true})
    company?: CompanyUpdateOneRequiredWithoutEmployeesInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumUserRoleInCompanyFieldUpdateOperationsInput, {nullable:true})
    role?: EnumUserRoleInCompanyFieldUpdateOperationsInput;
}
