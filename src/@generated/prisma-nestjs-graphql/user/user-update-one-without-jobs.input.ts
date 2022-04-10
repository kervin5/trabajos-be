import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutJobsInput } from './user-create-without-jobs.input';
import { UserCreateOrConnectWithoutJobsInput } from './user-create-or-connect-without-jobs.input';
import { UserUpsertWithoutJobsInput } from './user-upsert-without-jobs.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutJobsInput } from './user-update-without-jobs.input';

@InputType()
export class UserUpdateOneWithoutJobsInput {

    @Field(() => UserCreateWithoutJobsInput, {nullable:true})
    create?: UserCreateWithoutJobsInput;

    @Field(() => UserCreateOrConnectWithoutJobsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput;

    @Field(() => UserUpsertWithoutJobsInput, {nullable:true})
    upsert?: UserUpsertWithoutJobsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutJobsInput, {nullable:true})
    update?: UserUpdateWithoutJobsInput;
}
