import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationWhereInput } from './location-where.input';

@ArgsType()
export class DeleteManyLocationArgs {

    @Field(() => LocationWhereInput, {nullable:true})
    where?: LocationWhereInput;
}
