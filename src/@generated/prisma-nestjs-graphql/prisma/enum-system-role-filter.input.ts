import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemRole } from './system-role.enum';
import { NestedEnumSystemRoleFilter } from './nested-enum-system-role-filter.input';

@InputType()
export class EnumSystemRoleFilter {

    @Field(() => SystemRole, {nullable:true})
    equals?: keyof typeof SystemRole;

    @Field(() => [SystemRole], {nullable:true})
    in?: Array<keyof typeof SystemRole>;

    @Field(() => [SystemRole], {nullable:true})
    notIn?: Array<keyof typeof SystemRole>;

    @Field(() => NestedEnumSystemRoleFilter, {nullable:true})
    not?: NestedEnumSystemRoleFilter;
}
