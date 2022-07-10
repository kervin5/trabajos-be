import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { JobUpdateManyWithoutAuthorNestedInput } from '../job/job-update-many-without-author-nested.input';
import { EnumSystemRoleFieldUpdateOperationsInput } from '../prisma/enum-system-role-field-update-operations.input';
import { EmployeeInCompanyUpdateManyWithoutEmployeeNestedInput } from '../employee-in-company/employee-in-company-update-many-without-employee-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class UserUpdateWithoutTagsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => JobUpdateManyWithoutAuthorNestedInput, {nullable:true})
    jobs?: JobUpdateManyWithoutAuthorNestedInput;

    @Field(() => EnumSystemRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumSystemRoleFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EmployeeInCompanyUpdateManyWithoutEmployeeNestedInput, {nullable:true})
    companies?: EmployeeInCompanyUpdateManyWithoutEmployeeNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    emailVerified?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    phoneVerified?: BoolFieldUpdateOperationsInput;
}
