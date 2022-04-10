import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutJobsInput } from './user-create-without-jobs.input';

@InputType()
export class UserCreateOrConnectWithoutJobsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutJobsInput, {nullable:false})
    create!: UserCreateWithoutJobsInput;
}
