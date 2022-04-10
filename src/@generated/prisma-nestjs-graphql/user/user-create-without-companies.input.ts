import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateNestedManyWithoutAuthorInput } from '../job/job-create-nested-many-without-author.input';
import { SystemRole } from '../prisma/system-role.enum';
import { TagCreateNestedManyWithoutUserInput } from '../tag/tag-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutCompaniesInput {

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

    @Field(() => JobCreateNestedManyWithoutAuthorInput, {nullable:true})
    jobs?: JobCreateNestedManyWithoutAuthorInput;

    @Field(() => SystemRole, {nullable:false})
    role!: keyof typeof SystemRole;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Boolean, {nullable:true})
    emailVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    phoneVerified?: boolean;

    @Field(() => TagCreateNestedManyWithoutUserInput, {nullable:true})
    tags?: TagCreateNestedManyWithoutUserInput;
}
