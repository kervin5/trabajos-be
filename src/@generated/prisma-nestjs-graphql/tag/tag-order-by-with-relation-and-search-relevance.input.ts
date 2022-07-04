import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { JobOrderByRelationAggregateInput } from '../job/job-order-by-relation-aggregate.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { TagOrderByRelevanceInput } from './tag-order-by-relevance.input';

@InputType()
export class TagOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => JobOrderByRelationAggregateInput, {nullable:true})
    jobs?: JobOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    User?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => TagOrderByRelevanceInput, {nullable:true})
    _relevance?: TagOrderByRelevanceInput;
}
