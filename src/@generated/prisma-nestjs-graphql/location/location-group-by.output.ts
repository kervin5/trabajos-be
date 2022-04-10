import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { LocationCountAggregate } from './location-count-aggregate.output';
import { LocationAvgAggregate } from './location-avg-aggregate.output';
import { LocationSumAggregate } from './location-sum-aggregate.output';
import { LocationMinAggregate } from './location-min-aggregate.output';
import { LocationMaxAggregate } from './location-max-aggregate.output';

@ObjectType()
export class LocationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    latitude!: number;

    @Field(() => Float, {nullable:false})
    longitude!: number;

    @Field(() => LocationCountAggregate, {nullable:true})
    _count?: LocationCountAggregate;

    @Field(() => LocationAvgAggregate, {nullable:true})
    _avg?: LocationAvgAggregate;

    @Field(() => LocationSumAggregate, {nullable:true})
    _sum?: LocationSumAggregate;

    @Field(() => LocationMinAggregate, {nullable:true})
    _min?: LocationMinAggregate;

    @Field(() => LocationMaxAggregate, {nullable:true})
    _max?: LocationMaxAggregate;
}
