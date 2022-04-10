import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCompaniesInput } from './user-create-without-companies.input';

@InputType()
export class UserCreateOrConnectWithoutCompaniesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCompaniesInput, {nullable:false})
    create!: UserCreateWithoutCompaniesInput;
}
