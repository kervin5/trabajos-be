import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImageCountOrderByAggregateInput } from './image-count-order-by-aggregate.input';
import { ImageMaxOrderByAggregateInput } from './image-max-order-by-aggregate.input';
import { ImageMinOrderByAggregateInput } from './image-min-order-by-aggregate.input';

@InputType()
export class ImageOrderByWithAggregationInput {

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

    @Field(() => SortOrder, {nullable:true})
    jobId?: keyof typeof SortOrder;

    @Field(() => ImageCountOrderByAggregateInput, {nullable:true})
    _count?: ImageCountOrderByAggregateInput;

    @Field(() => ImageMaxOrderByAggregateInput, {nullable:true})
    _max?: ImageMaxOrderByAggregateInput;

    @Field(() => ImageMinOrderByAggregateInput, {nullable:true})
    _min?: ImageMinOrderByAggregateInput;
}
