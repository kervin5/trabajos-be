import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutLocationInput } from './job-create-without-location.input';
import { JobCreateOrConnectWithoutLocationInput } from './job-create-or-connect-without-location.input';
import { JobCreateManyLocationInputEnvelope } from './job-create-many-location-input-envelope.input';
import { JobWhereUniqueInput } from './job-where-unique.input';

@InputType()
export class JobUncheckedCreateNestedManyWithoutLocationInput {

    @Field(() => [JobCreateWithoutLocationInput], {nullable:true})
    create?: Array<JobCreateWithoutLocationInput>;

    @Field(() => [JobCreateOrConnectWithoutLocationInput], {nullable:true})
    connectOrCreate?: Array<JobCreateOrConnectWithoutLocationInput>;

    @Field(() => JobCreateManyLocationInputEnvelope, {nullable:true})
    createMany?: JobCreateManyLocationInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    connect?: Array<JobWhereUniqueInput>;
}
