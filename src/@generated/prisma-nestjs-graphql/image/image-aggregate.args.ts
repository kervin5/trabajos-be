import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageWhereInput } from './image-where.input';
import { ImageOrderByWithRelationAndSearchRelevanceInput } from './image-order-by-with-relation-and-search-relevance.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ImageCountAggregateInput } from './image-count-aggregate.input';
import { ImageMinAggregateInput } from './image-min-aggregate.input';
import { ImageMaxAggregateInput } from './image-max-aggregate.input';

@ArgsType()
export class ImageAggregateArgs {

    @Field(() => ImageWhereInput, {nullable:true})
    where?: ImageWhereInput;

    @Field(() => [ImageOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ImageOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ImageWhereUniqueInput, {nullable:true})
    cursor?: ImageWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ImageCountAggregateInput, {nullable:true})
    _count?: ImageCountAggregateInput;

    @Field(() => ImageMinAggregateInput, {nullable:true})
    _min?: ImageMinAggregateInput;

    @Field(() => ImageMaxAggregateInput, {nullable:true})
    _max?: ImageMaxAggregateInput;
}
