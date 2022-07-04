import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LocationCountOrderByAggregateInput } from './location-count-order-by-aggregate.input';
import { LocationAvgOrderByAggregateInput } from './location-avg-order-by-aggregate.input';
import { LocationMaxOrderByAggregateInput } from './location-max-order-by-aggregate.input';
import { LocationMinOrderByAggregateInput } from './location-min-order-by-aggregate.input';
import { LocationSumOrderByAggregateInput } from './location-sum-order-by-aggregate.input';

@InputType()
export class LocationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => LocationCountOrderByAggregateInput, {nullable:true})
    _count?: LocationCountOrderByAggregateInput;

    @Field(() => LocationAvgOrderByAggregateInput, {nullable:true})
    _avg?: LocationAvgOrderByAggregateInput;

    @Field(() => LocationMaxOrderByAggregateInput, {nullable:true})
    _max?: LocationMaxOrderByAggregateInput;

    @Field(() => LocationMinOrderByAggregateInput, {nullable:true})
    _min?: LocationMinOrderByAggregateInput;

    @Field(() => LocationSumOrderByAggregateInput, {nullable:true})
    _sum?: LocationSumOrderByAggregateInput;
}
