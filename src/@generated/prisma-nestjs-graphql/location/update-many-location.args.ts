import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationUpdateManyMutationInput } from './location-update-many-mutation.input';
import { LocationWhereInput } from './location-where.input';

@ArgsType()
export class UpdateManyLocationArgs {

    @Field(() => LocationUpdateManyMutationInput, {nullable:false})
    data!: LocationUpdateManyMutationInput;

    @Field(() => LocationWhereInput, {nullable:true})
    where?: LocationWhereInput;
}
