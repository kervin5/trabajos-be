import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobWhereInput } from './job-where.input';
import { JobOrderByWithRelationAndSearchRelevanceInput } from './job-order-by-with-relation-and-search-relevance.input';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Int } from '@nestjs/graphql';
import { JobScalarFieldEnum } from './job-scalar-field.enum';

@ArgsType()
export class FindFirstJobArgs {

    @Field(() => JobWhereInput, {nullable:true})
    where?: JobWhereInput;

    @Field(() => [JobOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<JobOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => JobWhereUniqueInput, {nullable:true})
    cursor?: JobWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [JobScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof JobScalarFieldEnum>;
}
