import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTagsInput } from './user-update-without-tags.input';
import { UserCreateWithoutTagsInput } from './user-create-without-tags.input';

@InputType()
export class UserUpsertWithoutTagsInput {

    @Field(() => UserUpdateWithoutTagsInput, {nullable:false})
    update!: UserUpdateWithoutTagsInput;

    @Field(() => UserCreateWithoutTagsInput, {nullable:false})
    create!: UserCreateWithoutTagsInput;
}
