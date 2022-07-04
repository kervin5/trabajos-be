import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutLocationInput } from './job-create-without-location.input';
import { JobCreateOrConnectWithoutLocationInput } from './job-create-or-connect-without-location.input';
import { JobUpsertWithWhereUniqueWithoutLocationInput } from './job-upsert-with-where-unique-without-location.input';
import { JobCreateManyLocationInputEnvelope } from './job-create-many-location-input-envelope.input';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithWhereUniqueWithoutLocationInput } from './job-update-with-where-unique-without-location.input';
import { JobUpdateManyWithWhereWithoutLocationInput } from './job-update-many-with-where-without-location.input';
import { JobScalarWhereInput } from './job-scalar-where.input';

@InputType()
export class JobUpdateManyWithoutLocationInput {

    @Field(() => [JobCreateWithoutLocationInput], {nullable:true})
    create?: Array<JobCreateWithoutLocationInput>;

    @Field(() => [JobCreateOrConnectWithoutLocationInput], {nullable:true})
    connectOrCreate?: Array<JobCreateOrConnectWithoutLocationInput>;

    @Field(() => [JobUpsertWithWhereUniqueWithoutLocationInput], {nullable:true})
    upsert?: Array<JobUpsertWithWhereUniqueWithoutLocationInput>;

    @Field(() => JobCreateManyLocationInputEnvelope, {nullable:true})
    createMany?: JobCreateManyLocationInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    set?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    disconnect?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    delete?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    connect?: Array<JobWhereUniqueInput>;

    @Field(() => [JobUpdateWithWhereUniqueWithoutLocationInput], {nullable:true})
    update?: Array<JobUpdateWithWhereUniqueWithoutLocationInput>;

    @Field(() => [JobUpdateManyWithWhereWithoutLocationInput], {nullable:true})
    updateMany?: Array<JobUpdateManyWithWhereWithoutLocationInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    deleteMany?: Array<JobScalarWhereInput>;
}
