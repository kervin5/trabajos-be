import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EmployeeInCompanyListRelationFilter } from '../employee-in-company/employee-in-company-list-relation-filter.input';
import { JobListRelationFilter } from '../job/job-list-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class CompanyWhereInput {

    @Field(() => [CompanyWhereInput], {nullable:true})
    AND?: Array<CompanyWhereInput>;

    @Field(() => [CompanyWhereInput], {nullable:true})
    OR?: Array<CompanyWhereInput>;

    @Field(() => [CompanyWhereInput], {nullable:true})
    NOT?: Array<CompanyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EmployeeInCompanyListRelationFilter, {nullable:true})
    employees?: EmployeeInCompanyListRelationFilter;

    @Field(() => JobListRelationFilter, {nullable:true})
    jobs?: JobListRelationFilter;

    @Field(() => BoolFilter, {nullable:true})
    verified?: BoolFilter;
}
