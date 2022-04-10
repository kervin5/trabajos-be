import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTagsInput } from '../user/user-create-nested-one-without-tags.input';

@InputType()
export class TagCreateWithoutJobsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedOneWithoutTagsInput, {nullable:true})
    User?: UserCreateNestedOneWithoutTagsInput;
}
