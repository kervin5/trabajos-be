import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Job } from '../job/job.model';
import { SystemRole } from '../prisma/system-role.enum';
import { EmployeeInCompany } from '../employee-in-company/employee-in-company.model';
import { Tag } from '../tag/tag.model';
import { UserCount } from './user-count.output';

@ObjectType({isAbstract:true})
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    password!: string;

    @Field(() => String, {nullable:true})
    firstName!: string | null;

    @Field(() => String, {nullable:true})
    lastName!: string | null;

    @HideField()
    jobs?: Array<Job>;

    @Field(() => SystemRole, {nullable:false})
    role!: keyof typeof SystemRole;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @HideField()
    companies?: Array<EmployeeInCompany>;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    emailVerified!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    phoneVerified!: boolean;

    @HideField()
    tags?: Array<Tag>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
