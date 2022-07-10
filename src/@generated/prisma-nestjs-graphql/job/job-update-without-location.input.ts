import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumJobStatusFieldUpdateOperationsInput } from '../prisma/enum-job-status-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateOneWithoutJobsNestedInput } from '../user/user-update-one-without-jobs-nested.input';
import { EnumJobSourceFieldUpdateOperationsInput } from '../prisma/enum-job-source-field-update-operations.input';
import { CompanyUpdateOneWithoutJobsNestedInput } from '../company/company-update-one-without-jobs-nested.input';
import { ImageUpdateManyWithoutJobNestedInput } from '../image/image-update-many-without-job-nested.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { TagUpdateManyWithoutJobsNestedInput } from '../tag/tag-update-many-without-jobs-nested.input';

@InputType()
export class JobUpdateWithoutLocationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => EnumJobStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumJobStatusFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    views?: IntFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutJobsNestedInput, {nullable:true})
    author?: UserUpdateOneWithoutJobsNestedInput;

    @Field(() => EnumJobSourceFieldUpdateOperationsInput, {nullable:true})
    source?: EnumJobSourceFieldUpdateOperationsInput;

    @Field(() => CompanyUpdateOneWithoutJobsNestedInput, {nullable:true})
    company?: CompanyUpdateOneWithoutJobsNestedInput;

    @Field(() => ImageUpdateManyWithoutJobNestedInput, {nullable:true})
    images?: ImageUpdateManyWithoutJobNestedInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    externalUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TagUpdateManyWithoutJobsNestedInput, {nullable:true})
    tags?: TagUpdateManyWithoutJobsNestedInput;
}
