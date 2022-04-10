import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { JobOrderByWithRelationAndSearchRelevanceInput } from '../job/job-order-by-with-relation-and-search-relevance.input';
import { ImageOrderByRelevanceInput } from './image-order-by-relevance.input';

@InputType()
export class ImageOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bucket?: keyof typeof SortOrder;

    @Field(() => JobOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    job?: JobOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    jobId?: keyof typeof SortOrder;

    @Field(() => ImageOrderByRelevanceInput, {nullable:true})
    _relevance?: ImageOrderByRelevanceInput;
}
