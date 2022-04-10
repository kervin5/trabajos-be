import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobUncheckedCreateNestedManyWithoutTagsInput } from '../job/job-unchecked-create-nested-many-without-tags.input';

@InputType()
export class TagUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => JobUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    jobs?: JobUncheckedCreateNestedManyWithoutTagsInput;
}
