import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumSystemRoleFieldUpdateOperationsInput } from '../prisma/enum-system-role-field-update-operations.input';
import { EmployeeInCompanyUpdateManyWithoutEmployeeNestedInput } from '../employee-in-company/employee-in-company-update-many-without-employee-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { TagUpdateManyWithoutUserNestedInput } from '../tag/tag-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutJobsInput {

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

    @Field(() => TagUpdateManyWithoutUserNestedInput, {nullable:true})
    tags?: TagUpdateManyWithoutUserNestedInput;
}
