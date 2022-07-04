import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumUserRoleInCompanyFilter } from '../prisma/enum-user-role-in-company-filter.input';

@InputType()
export class EmployeeInCompanyScalarWhereInput {

    @Field(() => [EmployeeInCompanyScalarWhereInput], {nullable:true})
    AND?: Array<EmployeeInCompanyScalarWhereInput>;

    @Field(() => [EmployeeInCompanyScalarWhereInput], {nullable:true})
    OR?: Array<EmployeeInCompanyScalarWhereInput>;

    @Field(() => [EmployeeInCompanyScalarWhereInput], {nullable:true})
    NOT?: Array<EmployeeInCompanyScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    companyId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    employeeId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumUserRoleInCompanyFilter, {nullable:true})
    role?: EnumUserRoleInCompanyFilter;
}
