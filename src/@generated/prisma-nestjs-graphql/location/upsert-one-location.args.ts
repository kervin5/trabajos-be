import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationCreateInput } from './location-create.input';
import { LocationUpdateInput } from './location-update.input';

@ArgsType()
export class UpsertOneLocationArgs {

    @Field(() => LocationWhereUniqueInput, {nullable:false})
    where!: LocationWhereUniqueInput;

    @Field(() => LocationCreateInput, {nullable:false})
    create!: LocationCreateInput;

    @Field(() => LocationUpdateInput, {nullable:false})
    update!: LocationUpdateInput;
}
