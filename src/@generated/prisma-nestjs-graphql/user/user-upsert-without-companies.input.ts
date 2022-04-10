import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCompaniesInput } from './user-update-without-companies.input';
import { UserCreateWithoutCompaniesInput } from './user-create-without-companies.input';

@InputType()
export class UserUpsertWithoutCompaniesInput {

    @Field(() => UserUpdateWithoutCompaniesInput, {nullable:false})
    update!: UserUpdateWithoutCompaniesInput;

    @Field(() => UserCreateWithoutCompaniesInput, {nullable:false})
    create!: UserCreateWithoutCompaniesInput;
}
