import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationUpdateInput } from './location-update.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';

@ArgsType()
export class UpdateOneLocationArgs {

    @Field(() => LocationUpdateInput, {nullable:false})
    data!: LocationUpdateInput;

    @Field(() => LocationWhereUniqueInput, {nullable:false})
    where!: LocationWhereUniqueInput;
}
