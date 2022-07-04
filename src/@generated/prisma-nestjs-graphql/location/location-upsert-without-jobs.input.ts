import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationUpdateWithoutJobsInput } from './location-update-without-jobs.input';
import { LocationCreateWithoutJobsInput } from './location-create-without-jobs.input';

@InputType()
export class LocationUpsertWithoutJobsInput {

    @Field(() => LocationUpdateWithoutJobsInput, {nullable:false})
    update!: LocationUpdateWithoutJobsInput;

    @Field(() => LocationCreateWithoutJobsInput, {nullable:false})
    create!: LocationCreateWithoutJobsInput;
}
