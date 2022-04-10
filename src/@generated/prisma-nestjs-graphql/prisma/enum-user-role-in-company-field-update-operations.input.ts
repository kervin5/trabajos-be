import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleInCompany } from '../user/user-role-in-company.enum';

@InputType()
export class EnumUserRoleInCompanyFieldUpdateOperationsInput {

    @Field(() => UserRoleInCompany, {nullable:true})
    set?: keyof typeof UserRoleInCompany;
}
