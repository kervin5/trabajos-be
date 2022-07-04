import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyOrderByRelevanceFieldEnum } from './employee-in-company-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EmployeeInCompanyOrderByRelevanceInput {

    @Field(() => [EmployeeInCompanyOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof EmployeeInCompanyOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
