import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeInCompanyWhereInput } from './employee-in-company-where.input';
import { EmployeeInCompanyOrderByWithAggregationInput } from './employee-in-company-order-by-with-aggregation.input';
import { EmployeeInCompanyScalarFieldEnum } from './employee-in-company-scalar-field.enum';
import { EmployeeInCompanyScalarWhereWithAggregatesInput } from './employee-in-company-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EmployeeInCompanyCountAggregateInput } from './employee-in-company-count-aggregate.input';
import { EmployeeInCompanyMinAggregateInput } from './employee-in-company-min-aggregate.input';
import { EmployeeInCompanyMaxAggregateInput } from './employee-in-company-max-aggregate.input';

@ArgsType()
export class EmployeeInCompanyGroupByArgs {

    @Field(() => EmployeeInCompanyWhereInput, {nullable:true})
    where?: EmployeeInCompanyWhereInput;

    @Field(() => [EmployeeInCompanyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EmployeeInCompanyOrderByWithAggregationInput>;

    @Field(() => [EmployeeInCompanyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmployeeInCompanyScalarFieldEnum>;

    @Field(() => EmployeeInCompanyScalarWhereWithAggregatesInput, {nullable:true})
    having?: EmployeeInCompanyScalarWhereWithAggregatesInput;

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
