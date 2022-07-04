import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Job } from '../job/job.model';
import { HideField } from '@nestjs/graphql';
import { LocationCount } from './location-count.output';

@ObjectType({isAbstract:true})
export class Location {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    latitude!: number;

    @Field(() => Float, {nullable:false})
    longitude!: number;

    @HideField()
    jobs?: Array<Job>;

    @Field(() => LocationCount, {nullable:false})
    _count?: LocationCount;
}
