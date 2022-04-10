import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateNestedManyWithoutTagsInput } from '../job/job-create-nested-many-without-tags.input';

@InputType()
export class TagCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => JobCreateNestedManyWithoutTagsInput, {nullable:true})
    jobs?: JobCreateNestedManyWithoutTagsInput;
}
