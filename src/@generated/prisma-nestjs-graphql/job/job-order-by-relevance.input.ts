import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobOrderByRelevanceFieldEnum } from './job-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class JobOrderByRelevanceInput {

    @Field(() => [JobOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof JobOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
