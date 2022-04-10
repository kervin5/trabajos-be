import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { JobUpdateManyWithoutTagsInput } from '../job/job-update-many-without-tags.input';
import { UserUpdateOneWithoutTagsInput } from '../user/user-update-one-without-tags.input';

@InputType()
export class TagUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => JobUpdateManyWithoutTagsInput, {nullable:true})
    jobs?: JobUpdateManyWithoutTagsInput;

    @Field(() => UserUpdateOneWithoutTagsInput, {nullable:true})
    User?: UserUpdateOneWithoutTagsInput;
}
