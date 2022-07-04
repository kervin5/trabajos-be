import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationWhereInput } from './location-where.input';
import { LocationOrderByWithRelationAndSearchRelevanceInput } from './location-order-by-with-relation-and-search-relevance.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationScalarFieldEnum } from './location-scalar-field.enum';

@ArgsType()
export class FindManyLocationArgs {

    @Field(() => LocationWhereInput, {nullable:true})
    where?: LocationWhereInput;

    @Field(() => [LocationOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<LocationOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    cursor?: LocationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LocationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LocationScalarFieldEnum>;
}
