import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleInCompany } from '../user/user-role-in-company.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserRoleInCompanyFilter } from './nested-enum-user-role-in-company-filter.input';

@InputType()
export class NestedEnumUserRoleInCompanyWithAggregatesFilter {

    @Field(() => UserRoleInCompany, {nullable:true})
    equals?: keyof typeof UserRoleInCompany;

    @Field(() => [UserRoleInCompany], {nullable:true})
    in?: Array<keyof typeof UserRoleInCompany>;

    @Field(() => [UserRoleInCompany], {nullable:true})
    notIn?: Array<keyof typeof UserRoleInCompany>;

    @Field(() => NestedEnumUserRoleInCompanyWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserRoleInCompanyWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserRoleInCompanyFilter, {nullable:true})
    _min?: NestedEnumUserRoleInCompanyFilter;

    @Field(() => NestedEnumUserRoleInCompanyFilter, {nullable:true})
    _max?: NestedEnumUserRoleInCompanyFilter;
}
