import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class JobSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    views?: keyof typeof SortOrder;
}
