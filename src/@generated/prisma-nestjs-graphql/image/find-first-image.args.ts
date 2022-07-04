import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageWhereInput } from './image-where.input';
import { ImageOrderByWithRelationAndSearchRelevanceInput } from './image-order-by-with-relation-and-search-relevance.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ImageScalarFieldEnum } from './image-scalar-field.enum';

@ArgsType()
export class FindFirstImageArgs {

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

    @Field(() => [ImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImageScalarFieldEnum>;
}
