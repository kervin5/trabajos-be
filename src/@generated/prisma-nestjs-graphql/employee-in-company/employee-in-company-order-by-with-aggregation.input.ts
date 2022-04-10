import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EmployeeInCompanyCountOrderByAggregateInput } from './employee-in-company-count-order-by-aggregate.input';
import { EmployeeInCompanyMaxOrderByAggregateInput } from './employee-in-company-max-order-by-aggregate.input';
import { EmployeeInCompanyMinOrderByAggregateInput } from './employee-in-company-min-order-by-aggregate.input';

@InputType()
export class EmployeeInCompanyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    companyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => EmployeeInCompanyCountOrderByAggregateInput, {nullable:true})
    _count?: EmployeeInCompanyCountOrderByAggregateInput;

    @Field(() => EmployeeInCompanyMaxOrderByAggregateInput, {nullable:true})
    _max?: EmployeeInCompanyMaxOrderByAggregateInput;

    @Field(() => EmployeeInCompanyMinOrderByAggregateInput, {nullable:true})
    _min?: EmployeeInCompanyMinOrderByAggregateInput;
}
