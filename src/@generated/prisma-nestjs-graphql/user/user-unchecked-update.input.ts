import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { JobUncheckedUpdateManyWithoutAuthorInput } from '../job/job-unchecked-update-many-without-author.input';
import { EnumSystemRoleFieldUpdateOperationsInput } from '../prisma/enum-system-role-field-update-operations.input';
import { EmployeeInCompanyUncheckedUpdateManyWithoutEmployeeInput } from '../employee-in-company/employee-in-company-unchecked-update-many-without-employee.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { TagUncheckedUpdateManyWithoutUserInput } from '../tag/tag-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateInput {

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

    @Field(() => JobUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    jobs?: JobUncheckedUpdateManyWithoutAuthorInput;

    @Field(() => EnumSystemRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumSystemRoleFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EmployeeInCompanyUncheckedUpdateManyWithoutEmployeeInput, {nullable:true})
    companies?: EmployeeInCompanyUncheckedUpdateManyWithoutEmployeeInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    emailVerified?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    phoneVerified?: BoolFieldUpdateOperationsInput;

    @Field(() => TagUncheckedUpdateManyWithoutUserInput, {nullable:true})
    tags?: TagUncheckedUpdateManyWithoutUserInput;
}
