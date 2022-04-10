import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumJobStatusFilter } from '../prisma/enum-job-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LocationRelationFilter } from '../location/location-relation-filter.input';
import { EnumJobSourceFilter } from '../prisma/enum-job-source-filter.input';
import { CompanyRelationFilter } from '../company/company-relation-filter.input';
import { ImageListRelationFilter } from '../image/image-list-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';

@InputType()
export class JobWhereInput {

    @Field(() => [JobWhereInput], {nullable:true})
    AND?: Array<JobWhereInput>;

    @Field(() => [JobWhereInput], {nullable:true})
    OR?: Array<JobWhereInput>;

    @Field(() => [JobWhereInput], {nullable:true})
    NOT?: Array<JobWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: StringNullableFilter;

    @Field(() => LocationRelationFilter, {nullable:true})
    location?: LocationRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    locationId?: StringNullableFilter;

    @Field(() => EnumJobSourceFilter, {nullable:true})
    source?: EnumJobSourceFilter;

    @Field(() => CompanyRelationFilter, {nullable:true})
    company?: CompanyRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    companyId?: StringNullableFilter;

    @Field(() => ImageListRelationFilter, {nullable:true})
    images?: ImageListRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    externalUrl?: StringNullableFilter;

    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: TagListRelationFilter;
}
