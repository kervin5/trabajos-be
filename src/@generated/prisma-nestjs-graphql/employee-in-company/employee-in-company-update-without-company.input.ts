import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutCompaniesInput } from '../user/user-update-one-required-without-companies.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumUserRoleInCompanyFieldUpdateOperationsInput } from '../prisma/enum-user-role-in-company-field-update-operations.input';

@InputType()
export class EmployeeInCompanyUpdateWithoutCompanyInput {

    @Field(() => UserUpdateOneRequiredWithoutCompaniesInput, {nullable:true})
    employee?: UserUpdateOneRequiredWithoutCompaniesInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumUserRoleInCompanyFieldUpdateOperationsInput, {nullable:true})
    role?: EnumUserRoleInCompanyFieldUpdateOperationsInput;
}
