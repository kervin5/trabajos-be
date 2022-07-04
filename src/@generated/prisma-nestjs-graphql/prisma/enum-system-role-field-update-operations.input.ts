import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemRole } from './system-role.enum';

@InputType()
export class EnumSystemRoleFieldUpdateOperationsInput {

    @Field(() => SystemRole, {nullable:true})
    set?: keyof typeof SystemRole;
}
