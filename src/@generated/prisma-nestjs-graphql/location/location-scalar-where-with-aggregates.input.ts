import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';

@InputType()
export class LocationScalarWhereWithAggregatesInput {

    @Field(() => [LocationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LocationScalarWhereWithAggregatesInput>;

    @Field(() => [LocationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LocationScalarWhereWithAggregatesInput>;

    @Field(() => [LocationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LocationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    latitude?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    longitude?: FloatWithAggregatesFilter;
}
