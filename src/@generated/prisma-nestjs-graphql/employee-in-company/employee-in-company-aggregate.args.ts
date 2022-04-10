import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeInCompanyWhereInput } from './employee-in-company-where.input';
import { EmployeeInCompanyOrderByWithRelationAndSearchRelevanceInput } from './employee-in-company-order-by-with-relation-and-search-relevance.input';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmployeeInCompanyCountAggregateInput } from './employee-in-company-count-aggregate.input';
import { EmployeeInCompanyMinAggregateInput } from './employee-in-company-min-aggregate.input';
import { EmployeeInCompanyMaxAggregateInput } from './employee-in-company-max-aggregate.input';

@ArgsType()
export class EmployeeInCompanyAggregateArgs {

    @Field(() => EmployeeInCompanyWhereInput, {nullable:true})
    where?: EmployeeInCompanyWhereInput;

    @Field(() => [EmployeeInCompanyOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<EmployeeInCompanyOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => EmployeeInCompanyWhereUniqueInput, {nullable:true})
    cursor?: EmployeeInCompanyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EmployeeInCompanyCountAggregateInput, {nullable:true})
    _count?: EmployeeInCompanyCountAggregateInput;

    @Field(() => EmployeeInCompanyMinAggregateInput, {nullable:true})
    _min?: EmployeeInCompanyMinAggregateInput;

    @Field(() => EmployeeInCompanyMaxAggregateInput, {nullable:true})
    _max?: EmployeeInCompanyMaxAggregateInput;
}
