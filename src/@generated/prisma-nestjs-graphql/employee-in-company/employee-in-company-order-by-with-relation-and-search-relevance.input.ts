import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyOrderByWithRelationAndSearchRelevanceInput } from '../company/company-order-by-with-relation-and-search-relevance.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { EmployeeInCompanyOrderByRelevanceInput } from './employee-in-company-order-by-relevance.input';

@InputType()
export class EmployeeInCompanyOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => CompanyOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    company?: CompanyOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    companyId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    employee?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => EmployeeInCompanyOrderByRelevanceInput, {nullable:true})
    _relevance?: EmployeeInCompanyOrderByRelevanceInput;
}
