import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumJobStatusWithAggregatesFilter } from '../prisma/enum-job-status-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumJobSourceWithAggregatesFilter } from '../prisma/enum-job-source-with-aggregates-filter.input';

@InputType()
export class JobScalarWhereWithAggregatesInput {

    @Field(() => [JobScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<JobScalarWhereWithAggregatesInput>;

    @Field(() => [JobScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<JobScalarWhereWithAggregatesInput>;

    @Field(() => [JobScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<JobScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    expiresAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => EnumJobStatusWithAggregatesFilter, {nullable:true})
    status?: EnumJobStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    views?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    authorId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    locationId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumJobSourceWithAggregatesFilter, {nullable:true})
    source?: EnumJobSourceWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    companyId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    externalUrl?: StringNullableWithAggregatesFilter;
}
