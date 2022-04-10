import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateNestedManyWithoutAuthorInput } from '../job/job-create-nested-many-without-author.input';
import { SystemRole } from '../prisma/system-role.enum';
import { EmployeeInCompanyCreateNestedManyWithoutEmployeeInput } from '../employee-in-company/employee-in-company-create-nested-many-without-employee.input';

@InputType()
export class UserCreateWithoutTagsInput {

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

    @Field(() => EmployeeInCompanyCreateNestedManyWithoutEmployeeInput, {nullable:true})
    companies?: EmployeeInCompanyCreateNestedManyWithoutEmployeeInput;

    @Field(() => Boolean, {nullable:true})
    emailVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    phoneVerified?: boolean;
}
