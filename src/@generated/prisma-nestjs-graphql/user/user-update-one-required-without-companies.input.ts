import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCompaniesInput } from './user-create-without-companies.input';
import { UserCreateOrConnectWithoutCompaniesInput } from './user-create-or-connect-without-companies.input';
import { UserUpsertWithoutCompaniesInput } from './user-upsert-without-companies.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCompaniesInput } from './user-update-without-companies.input';

@InputType()
export class UserUpdateOneRequiredWithoutCompaniesInput {

    @Field(() => UserCreateWithoutCompaniesInput, {nullable:true})
    create?: UserCreateWithoutCompaniesInput;

    @Field(() => UserCreateOrConnectWithoutCompaniesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCompaniesInput;

    @Field(() => UserUpsertWithoutCompaniesInput, {nullable:true})
    upsert?: UserUpsertWithoutCompaniesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCompaniesInput, {nullable:true})
    update?: UserUpdateWithoutCompaniesInput;
}
