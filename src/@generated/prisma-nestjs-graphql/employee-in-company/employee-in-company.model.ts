import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Company } from '../company/company.model';
import { User } from '../user/user.model';
import { UserRoleInCompany } from '../user/user-role-in-company.enum';

@ObjectType()
export class EmployeeInCompany {

    @Field(() => Company, {nullable:false})
    company?: Company;

    @Field(() => String, {nullable:false})
    companyId!: string;

    @Field(() => User, {nullable:false})
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
