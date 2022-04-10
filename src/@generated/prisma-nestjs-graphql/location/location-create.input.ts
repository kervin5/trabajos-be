import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { JobCreateNestedManyWithoutLocationInput } from '../job/job-create-nested-many-without-location.input';

@InputType()
export class LocationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    latitude!: number;

    @Field(() => Float, {nullable:false})
    longitude!: number;

    @Field(() => JobCreateNestedManyWithoutLocationInput, {nullable:true})
    jobs?: JobCreateNestedManyWithoutLocationInput;
}
