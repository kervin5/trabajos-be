import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationCreateWithoutJobsInput } from './location-create-without-jobs.input';

@InputType()
export class LocationCreateOrConnectWithoutJobsInput {

    @Field(() => LocationWhereUniqueInput, {nullable:false})
    where!: LocationWhereUniqueInput;

    @Field(() => LocationCreateWithoutJobsInput, {nullable:false})
    create!: LocationCreateWithoutJobsInput;
}
