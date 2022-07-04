import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumJobStatusFieldUpdateOperationsInput } from '../prisma/enum-job-status-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumJobSourceFieldUpdateOperationsInput } from '../prisma/enum-job-source-field-update-operations.input';
import { ImageUncheckedUpdateManyWithoutJobInput } from '../image/image-unchecked-update-many-without-job.input';
import { TagUncheckedUpdateManyWithoutJobsInput } from '../tag/tag-unchecked-update-many-without-jobs.input';

@InputType()
export class JobUncheckedUpdateWithoutCompanyInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    locationId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumJobSourceFieldUpdateOperationsInput, {nullable:true})
    source?: EnumJobSourceFieldUpdateOperationsInput;

    @Field(() => ImageUncheckedUpdateManyWithoutJobInput, {nullable:true})
    images?: ImageUncheckedUpdateManyWithoutJobInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    externalUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TagUncheckedUpdateManyWithoutJobsInput, {nullable:true})
    tags?: TagUncheckedUpdateManyWithoutJobsInput;
}
