import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationWhereUniqueInput } from './location-where-unique.input';

@ArgsType()
export class FindUniqueLocationArgs {

    @Field(() => LocationWhereUniqueInput, {nullable:false})
    where!: LocationWhereUniqueInput;
}
