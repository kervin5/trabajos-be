import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTagsInput } from './user-create-without-tags.input';
import { UserCreateOrConnectWithoutTagsInput } from './user-create-or-connect-without-tags.input';
import { UserUpsertWithoutTagsInput } from './user-upsert-without-tags.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTagsInput } from './user-update-without-tags.input';

@InputType()
export class UserUpdateOneWithoutTagsInput {

    @Field(() => UserCreateWithoutTagsInput, {nullable:true})
    create?: UserCreateWithoutTagsInput;

    @Field(() => UserCreateOrConnectWithoutTagsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput;

    @Field(() => UserUpsertWithoutTagsInput, {nullable:true})
    upsert?: UserUpsertWithoutTagsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTagsInput, {nullable:true})
    update?: UserUpdateWithoutTagsInput;
}
