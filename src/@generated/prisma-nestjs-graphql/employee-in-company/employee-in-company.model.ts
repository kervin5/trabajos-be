import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Company } from '../company/company.model';
import { HideField } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { UserRoleInCompany } from '../user/user-role-in-company.enum';

@ObjectType({isAbstract:true})
export class EmployeeInCompany {

    @HideField()
    company?: Company;

    @Field(() => String, {nullable:false})
    companyId!: string;

    @HideField()
    employee?: User;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => UserRoleInCompany, {nullable:false,defaultValue:'RECRUITER'})
    role!: keyof typeof UserRoleInCompany;
}
