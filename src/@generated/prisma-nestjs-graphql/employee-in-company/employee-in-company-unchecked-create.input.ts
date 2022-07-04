import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleInCompany } from '../user/user-role-in-company.enum';

@InputType()
export class EmployeeInCompanyUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    companyId!: string;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserRoleInCompany, {nullable:true})
    role?: keyof typeof UserRoleInCompany;
}
