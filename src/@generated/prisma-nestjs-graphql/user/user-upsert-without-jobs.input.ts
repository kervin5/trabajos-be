import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutJobsInput } from './user-update-without-jobs.input';
import { UserCreateWithoutJobsInput } from './user-create-without-jobs.input';

@InputType()
export class UserUpsertWithoutJobsInput {

    @Field(() => UserUpdateWithoutJobsInput, {nullable:false})
    update!: UserUpdateWithoutJobsInput;

    @Field(() => UserCreateWithoutJobsInput, {nullable:false})
    create!: UserCreateWithoutJobsInput;
}
