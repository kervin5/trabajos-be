import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumUserRoleInCompanyWithAggregatesFilter } from '../prisma/enum-user-role-in-company-with-aggregates-filter.input';

@InputType()
export class EmployeeInCompanyScalarWhereWithAggregatesInput {

    @Field(() => [EmployeeInCompanyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmployeeInCompanyScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeeInCompanyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmployeeInCompanyScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeeInCompanyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmployeeInCompanyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    companyId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    employeeId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumUserRoleInCompanyWithAggregatesFilter, {nullable:true})
    role?: EnumUserRoleInCompanyWithAggregatesFilter;
}
