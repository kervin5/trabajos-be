import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ImageCountAggregate } from './image-count-aggregate.output';
import { ImageMinAggregate } from './image-min-aggregate.output';
import { ImageMaxAggregate } from './image-max-aggregate.output';

@ObjectType()
export class AggregateImage {

    @Field(() => ImageCountAggregate, {nullable:true})
    _count?: ImageCountAggregate;

    @Field(() => ImageMinAggregate, {nullable:true})
    _min?: ImageMinAggregate;

    @Field(() => ImageMaxAggregate, {nullable:true})
    _max?: ImageMaxAggregate;
}
