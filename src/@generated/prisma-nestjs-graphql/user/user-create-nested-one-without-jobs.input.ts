import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutJobsInput } from './user-create-without-jobs.input';
import { UserCreateOrConnectWithoutJobsInput } from './user-create-or-connect-without-jobs.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutJobsInput {

    @Field(() => UserCreateWithoutJobsInput, {nullable:true})
    create?: UserCreateWithoutJobsInput;

    @Field(() => UserCreateOrConnectWithoutJobsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
