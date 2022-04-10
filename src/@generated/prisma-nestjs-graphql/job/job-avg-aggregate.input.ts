import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class JobAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    views?: true;
}
