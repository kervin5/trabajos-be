import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EmployeeInCompanyOrderByRelationAggregateInput } from '../employee-in-company/employee-in-company-order-by-relation-aggregate.input';
import { JobOrderByRelationAggregateInput } from '../job/job-order-by-relation-aggregate.input';
import { CompanyOrderByRelevanceInput } from './company-order-by-relevance.input';

@InputType()
export class CompanyOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => EmployeeInCompanyOrderByRelationAggregateInput, {nullable:true})
    employees?: EmployeeInCompanyOrderByRelationAggregateInput;

    @Field(() => JobOrderByRelationAggregateInput, {nullable:true})
    jobs?: JobOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;

    @Field(() => CompanyOrderByRelevanceInput, {nullable:true})
    _relevance?: CompanyOrderByRelevanceInput;
}
