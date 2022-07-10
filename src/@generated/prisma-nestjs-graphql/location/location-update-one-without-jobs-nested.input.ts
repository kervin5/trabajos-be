import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationCreateWithoutJobsInput } from './location-create-without-jobs.input';
import { LocationCreateOrConnectWithoutJobsInput } from './location-create-or-connect-without-jobs.input';
import { LocationUpsertWithoutJobsInput } from './location-upsert-without-jobs.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationUpdateWithoutJobsInput } from './location-update-without-jobs.input';

@InputType()
export class LocationUpdateOneWithoutJobsNestedInput {

    @Field(() => LocationCreateWithoutJobsInput, {nullable:true})
    create?: LocationCreateWithoutJobsInput;

    @Field(() => LocationCreateOrConnectWithoutJobsInput, {nullable:true})
    connectOrCreate?: LocationCreateOrConnectWithoutJobsInput;

    @Field(() => LocationUpsertWithoutJobsInput, {nullable:true})
    upsert?: LocationUpsertWithoutJobsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    connect?: LocationWhereUniqueInput;

    @Field(() => LocationUpdateWithoutJobsInput, {nullable:true})
    update?: LocationUpdateWithoutJobsInput;
}
