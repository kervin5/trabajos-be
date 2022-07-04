import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobCreateWithoutTagsInput } from './job-create-without-tags.input';

@InputType()
export class JobCreateOrConnectWithoutTagsInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobCreateWithoutTagsInput, {nullable:false})
    create!: JobCreateWithoutTagsInput;
}
