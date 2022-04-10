import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeInCompanyWhereInput } from './employee-in-company-where.input';
import { EmployeeInCompanyOrderByWithRelationAndSearchRelevanceInput } from './employee-in-company-order-by-with-relation-and-search-relevance.input';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmployeeInCompanyScalarFieldEnum } from './employee-in-company-scalar-field.enum';

@ArgsType()
export class FindFirstEmployeeInCompanyArgs {

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

    @Field(() => [EmployeeInCompanyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeeInCompanyScalarFieldEnum>;
}
