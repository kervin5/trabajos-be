import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumJobStatusFilter } from '../prisma/enum-job-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumJobSourceFilter } from '../prisma/enum-job-source-filter.input';

@InputType()
export class JobScalarWhereInput {

    @Field(() => [JobScalarWhereInput], {nullable:true})
    AND?: Array<JobScalarWhereInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    OR?: Array<JobScalarWhereInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    NOT?: Array<JobScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    expiresAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => EnumJobStatusFilter, {nullable:true})
    status?: EnumJobStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    views?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    locationId?: StringNullableFilter;

    @Field(() => EnumJobSourceFilter, {nullable:true})
    source?: EnumJobSourceFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    companyId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    externalUrl?: StringNullableFilter;
}
