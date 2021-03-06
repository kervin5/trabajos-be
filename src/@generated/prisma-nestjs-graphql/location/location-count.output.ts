import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LocationCount {

    @Field(() => Int, {nullable:false})
    jobs?: number;
}
