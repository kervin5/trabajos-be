import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { LocationOrderByWithRelationAndSearchRelevanceInput } from '../location/location-order-by-with-relation-and-search-relevance.input';
import { CompanyOrderByWithRelationAndSearchRelevanceInput } from '../company/company-order-by-with-relation-and-search-relevance.input';
import { ImageOrderByRelationAggregateInput } from '../image/image-order-by-relation-aggregate.input';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';
import { JobOrderByRelevanceInput } from './job-order-by-relevance.input';

@InputType()
export class JobOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    views?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    author?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => LocationOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    location?: LocationOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    locationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    source?: keyof typeof SortOrder;

    @Field(() => CompanyOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    company?: CompanyOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    companyId?: keyof typeof SortOrder;

    @Field(() => ImageOrderByRelationAggregateInput, {nullable:true})
    images?: ImageOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    externalUrl?: keyof typeof SortOrder;

    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: TagOrderByRelationAggregateInput;

    @Field(() => JobOrderByRelevanceInput, {nullable:true})
    _relevance?: JobOrderByRelevanceInput;
}
