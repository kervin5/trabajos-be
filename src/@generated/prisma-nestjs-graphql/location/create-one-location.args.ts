import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationCreateInput } from './location-create.input';

@ArgsType()
export class CreateOneLocationArgs {

    @Field(() => LocationCreateInput, {nullable:false})
    data!: LocationCreateInput;
}
