import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { JobUncheckedCreateNestedManyWithoutLocationInput } from '../job/job-unchecked-create-nested-many-without-location.input';

@InputType()
export class LocationUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    latitude!: number;

    @Field(() => Float, {nullable:false})
    longitude!: number;

    @Field(() => JobUncheckedCreateNestedManyWithoutLocationInput, {nullable:true})
    jobs?: JobUncheckedCreateNestedManyWithoutLocationInput;
}
