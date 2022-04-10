import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobCreateWithoutLocationInput } from './job-create-without-location.input';

@InputType()
export class JobCreateOrConnectWithoutLocationInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobCreateWithoutLocationInput, {nullable:false})
    create!: JobCreateWithoutLocationInput;
}
