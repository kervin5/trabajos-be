import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ImageScalarWhereWithAggregatesInput {

    @Field(() => [ImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ImageScalarWhereWithAggregatesInput>;

    @Field(() => [ImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ImageScalarWhereWithAggregatesInput>;

    @Field(() => [ImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ImageScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    path?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bucket?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    jobId?: StringNullableWithAggregatesFilter;
}
