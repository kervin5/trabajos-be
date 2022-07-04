import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class JobWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
