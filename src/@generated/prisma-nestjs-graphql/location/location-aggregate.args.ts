import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationWhereInput } from './location-where.input';
import { LocationOrderByWithRelationAndSearchRelevanceInput } from './location-order-by-with-relation-and-search-relevance.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationCountAggregateInput } from './location-count-aggregate.input';
import { LocationAvgAggregateInput } from './location-avg-aggregate.input';
import { LocationSumAggregateInput } from './location-sum-aggregate.input';
import { LocationMinAggregateInput } from './location-min-aggregate.input';
import { LocationMaxAggregateInput } from './location-max-aggregate.input';

@ArgsType()
export class LocationAggregateArgs {

    @Field(() => LocationWhereInput, {nullable:true})
    where?: LocationWhereInput;

    @Field(() => [LocationOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<LocationOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    cursor?: LocationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LocationCountAggregateInput, {nullable:true})
    _count?: LocationCountAggregateInput;

    @Field(() => LocationAvgAggregateInput, {nullable:true})
    _avg?: LocationAvgAggregateInput;

    @Field(() => LocationSumAggregateInput, {nullable:true})
    _sum?: LocationSumAggregateInput;

    @Field(() => LocationMinAggregateInput, {nullable:true})
    _min?: LocationMinAggregateInput;

    @Field(() => LocationMaxAggregateInput, {nullable:true})
    _max?: LocationMaxAggregateInput;
}
