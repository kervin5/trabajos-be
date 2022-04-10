import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutTagsInput } from './job-create-without-tags.input';
import { JobCreateOrConnectWithoutTagsInput } from './job-create-or-connect-without-tags.input';
import { JobWhereUniqueInput } from './job-where-unique.input';

@InputType()
export class JobUncheckedCreateNestedManyWithoutTagsInput {

    @Field(() => [JobCreateWithoutTagsInput], {nullable:true})
    create?: Array<JobCreateWithoutTagsInput>;

    @Field(() => [JobCreateOrConnectWithoutTagsInput], {nullable:true})
    connectOrCreate?: Array<JobCreateOrConnectWithoutTagsInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    connect?: Array<JobWhereUniqueInput>;
}
