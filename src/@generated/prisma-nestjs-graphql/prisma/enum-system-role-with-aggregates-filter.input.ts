import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemRole } from './system-role.enum';
import { NestedEnumSystemRoleWithAggregatesFilter } from './nested-enum-system-role-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSystemRoleFilter } from './nested-enum-system-role-filter.input';

@InputType()
export class EnumSystemRoleWithAggregatesFilter {

    @Field(() => SystemRole, {nullable:true})
    equals?: keyof typeof SystemRole;

    @Field(() => [SystemRole], {nullable:true})
    in?: Array<keyof typeof SystemRole>;

    @Field(() => [SystemRole], {nullable:true})
    notIn?: Array<keyof typeof SystemRole>;

    @Field(() => NestedEnumSystemRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSystemRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumSystemRoleFilter, {nullable:true})
    _min?: NestedEnumSystemRoleFilter;

    @Field(() => NestedEnumSystemRoleFilter, {nullable:true})
    _max?: NestedEnumSystemRoleFilter;
}
