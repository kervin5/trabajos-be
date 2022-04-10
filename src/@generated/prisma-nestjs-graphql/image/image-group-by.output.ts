import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ImageCountAggregate } from './image-count-aggregate.output';
import { ImageMinAggregate } from './image-min-aggregate.output';
import { ImageMaxAggregate } from './image-max-aggregate.output';

@ObjectType()
export class ImageGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:false})
    bucket!: string;

    @Field(() => String, {nullable:true})
    jobId?: string;

    @Field(() => ImageCountAggregate, {nullable:true})
    _count?: ImageCountAggregate;

    @Field(() => ImageMinAggregate, {nullable:true})
    _min?: ImageMinAggregate;

    @Field(() => ImageMaxAggregate, {nullable:true})
    _max?: ImageMaxAggregate;
}
