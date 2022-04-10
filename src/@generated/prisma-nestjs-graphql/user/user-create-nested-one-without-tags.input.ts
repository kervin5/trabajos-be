import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTagsInput } from './user-create-without-tags.input';
import { UserCreateOrConnectWithoutTagsInput } from './user-create-or-connect-without-tags.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTagsInput {

    @Field(() => UserCreateWithoutTagsInput, {nullable:true})
    create?: UserCreateWithoutTagsInput;

    @Field(() => UserCreateOrConnectWithoutTagsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
