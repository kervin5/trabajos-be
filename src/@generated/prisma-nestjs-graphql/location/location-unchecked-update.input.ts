import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { JobUncheckedUpdateManyWithoutLocationInput } from '../job/job-unchecked-update-many-without-location.input';

@InputType()
export class LocationUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: FloatFieldUpdateOperationsInput;

    @Field(() => JobUncheckedUpdateManyWithoutLocationInput, {nullable:true})
    jobs?: JobUncheckedUpdateManyWithoutLocationInput;
}
