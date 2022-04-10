import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyRelationFilter } from '../company/company-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumUserRoleInCompanyFilter } from '../prisma/enum-user-role-in-company-filter.input';

@InputType()
export class EmployeeInCompanyWhereInput {

    @Field(() => [EmployeeInCompanyWhereInput], {nullable:true})
    AND?: Array<EmployeeInCompanyWhereInput>;

    @Field(() => [EmployeeInCompanyWhereInput], {nullable:true})
    OR?: Array<EmployeeInCompanyWhereInput>;

    @Field(() => [EmployeeInCompanyWhereInput], {nullable:true})
    NOT?: Array<EmployeeInCompanyWhereInput>;

    @Field(() => CompanyRelationFilter, {nullable:true})
    company?: CompanyRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    companyId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    employee?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    employeeId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumUserRoleInCompanyFilter, {nullable:true})
    role?: EnumUserRoleInCompanyFilter;
}
