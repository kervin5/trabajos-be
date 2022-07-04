import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutAuthorInput } from './job-create-without-author.input';
import { JobCreateOrConnectWithoutAuthorInput } from './job-create-or-connect-without-author.input';
import { JobCreateManyAuthorInputEnvelope } from './job-create-many-author-input-envelope.input';
import { JobWhereUniqueInput } from './job-where-unique.input';

@InputType()
export class JobUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [JobCreateWithoutAuthorInput], {nullable:true})
    create?: Array<JobCreateWithoutAuthorInput>;

    @Field(() => [JobCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<JobCreateOrConnectWithoutAuthorInput>;

    @Field(() => JobCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: JobCreateManyAuthorInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    connect?: Array<JobWhereUniqueInput>;
}
