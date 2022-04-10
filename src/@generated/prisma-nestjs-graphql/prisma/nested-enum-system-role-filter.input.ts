import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemRole } from './system-role.enum';

@InputType()
export class NestedEnumSystemRoleFilter {

    @Field(() => SystemRole, {nullable:true})
    equals?: keyof typeof SystemRole;

    @Field(() => [SystemRole], {nullable:true})
    in?: Array<keyof typeof SystemRole>;

    @Field(() => [SystemRole], {nullable:true})
    notIn?: Array<keyof typeof SystemRole>;

    @Field(() => NestedEnumSystemRoleFilter, {nullable:true})
    not?: NestedEnumSystemRoleFilter;
}
