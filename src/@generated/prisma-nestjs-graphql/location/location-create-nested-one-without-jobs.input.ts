import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationCreateWithoutJobsInput } from './location-create-without-jobs.input';
import { LocationCreateOrConnectWithoutJobsInput } from './location-create-or-connect-without-jobs.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';

@InputType()
export class LocationCreateNestedOneWithoutJobsInput {

    @Field(() => LocationCreateWithoutJobsInput, {nullable:true})
    create?: LocationCreateWithoutJobsInput;

    @Field(() => LocationCreateOrConnectWithoutJobsInput, {nullable:true})
    connectOrCreate?: LocationCreateOrConnectWithoutJobsInput;

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    connect?: LocationWhereUniqueInput;
}
