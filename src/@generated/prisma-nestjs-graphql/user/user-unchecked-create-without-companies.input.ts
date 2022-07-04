import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobUncheckedCreateNestedManyWithoutAuthorInput } from '../job/job-unchecked-create-nested-many-without-author.input';
import { SystemRole } from '../prisma/system-role.enum';
import { TagUncheckedCreateNestedManyWithoutUserInput } from '../tag/tag-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutCompaniesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => JobUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    jobs?: JobUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => SystemRole, {nullable:false})
    role!: keyof typeof SystemRole;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Boolean, {nullable:true})
    emailVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    phoneVerified?: boolean;

    @Field(() => TagUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tags?: TagUncheckedCreateNestedManyWithoutUserInput;
}
