import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { JobOrderByRelationAggregateInput } from '../job/job-order-by-relation-aggregate.input';
import { LocationOrderByRelevanceInput } from './location-order-by-relevance.input';

@InputType()
export class LocationOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => JobOrderByRelationAggregateInput, {nullable:true})
    jobs?: JobOrderByRelationAggregateInput;

    @Field(() => LocationOrderByRelevanceInput, {nullable:true})
    _relevance?: LocationOrderByRelevanceInput;
}
