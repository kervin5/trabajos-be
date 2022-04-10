import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageWhereInput } from './image-where.input';
import { ImageOrderByWithAggregationInput } from './image-order-by-with-aggregation.input';
import { ImageScalarFieldEnum } from './image-scalar-field.enum';
import { ImageScalarWhereWithAggregatesInput } from './image-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ImageCountAggregateInput } from './image-count-aggregate.input';
import { ImageMinAggregateInput } from './image-min-aggregate.input';
import { ImageMaxAggregateInput } from './image-max-aggregate.input';

@ArgsType()
export class ImageGroupByArgs {

    @Field(() => ImageWhereInput, {nullable:true})
    where?: ImageWhereInput;

    @Field(() => [ImageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ImageOrderByWithAggregationInput>;

    @Field(() => [ImageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ImageScalarFieldEnum>;

    @Field(() => ImageScalarWhereWithAggregatesInput, {nullable:true})
    having?: ImageScalarWhereWithAggregatesInput;

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
