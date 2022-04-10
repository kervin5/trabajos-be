import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutTagsInput } from './user-create-without-tags.input';

@InputType()
export class UserCreateOrConnectWithoutTagsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTagsInput, {nullable:false})
    create!: UserCreateWithoutTagsInput;
}
