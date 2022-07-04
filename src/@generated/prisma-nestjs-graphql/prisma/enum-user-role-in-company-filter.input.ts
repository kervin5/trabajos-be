import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleInCompany } from '../user/user-role-in-company.enum';
import { NestedEnumUserRoleInCompanyFilter } from './nested-enum-user-role-in-company-filter.input';

@InputType()
export class EnumUserRoleInCompanyFilter {

    @Field(() => UserRoleInCompany, {nullable:true})
    equals?: keyof typeof UserRoleInCompany;

    @Field(() => [UserRoleInCompany], {nullable:true})
    in?: Array<keyof typeof UserRoleInCompany>;

    @Field(() => [UserRoleInCompany], {nullable:true})
    notIn?: Array<keyof typeof UserRoleInCompany>;

    @Field(() => NestedEnumUserRoleInCompanyFilter, {nullable:true})
    not?: NestedEnumUserRoleInCompanyFilter;
}
