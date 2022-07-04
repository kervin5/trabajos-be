import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumJobStatusFieldUpdateOperationsInput } from '../prisma/enum-job-status-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateOneWithoutJobsInput } from '../user/user-update-one-without-jobs.input';
import { LocationUpdateOneWithoutJobsInput } from '../location/location-update-one-without-jobs.input';
import { EnumJobSourceFieldUpdateOperationsInput } from '../prisma/enum-job-source-field-update-operations.input';
import { CompanyUpdateOneWithoutJobsInput } from '../company/company-update-one-without-jobs.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { TagUpdateManyWithoutJobsInput } from '../tag/tag-update-many-without-jobs.input';

@InputType()
export class JobUpdateWithoutImagesInput {

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

    @Field(() => UserUpdateOneWithoutJobsInput, {nullable:true})
    author?: UserUpdateOneWithoutJobsInput;

    @Field(() => LocationUpdateOneWithoutJobsInput, {nullable:true})
    location?: LocationUpdateOneWithoutJobsInput;

    @Field(() => EnumJobSourceFieldUpdateOperationsInput, {nullable:true})
    source?: EnumJobSourceFieldUpdateOperationsInput;

    @Field(() => CompanyUpdateOneWithoutJobsInput, {nullable:true})
    company?: CompanyUpdateOneWithoutJobsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    externalUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TagUpdateManyWithoutJobsInput, {nullable:true})
    tags?: TagUpdateManyWithoutJobsInput;
}
