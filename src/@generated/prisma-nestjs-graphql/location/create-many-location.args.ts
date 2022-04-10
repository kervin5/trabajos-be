import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationCreateManyInput } from './location-create-many.input';

@ArgsType()
export class CreateManyLocationArgs {

    @Field(() => [LocationCreateManyInput], {nullable:false})
    data!: Array<LocationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
