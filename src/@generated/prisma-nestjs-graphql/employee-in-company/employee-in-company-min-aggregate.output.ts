import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserRoleInCompany } from '../user/user-role-in-company.enum';

@ObjectType()
export class EmployeeInCompanyMinAggregate {

    @Field(() => String, {nullable:true})
    companyId?: string;

    @Field(() => String, {nullable:true})
    employeeId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserRoleInCompany, {nullable:true})
    role?: keyof typeof UserRoleInCompany;
}
