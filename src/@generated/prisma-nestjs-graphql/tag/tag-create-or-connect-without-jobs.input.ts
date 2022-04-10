import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagCreateWithoutJobsInput } from './tag-create-without-jobs.input';

@InputType()
export class TagCreateOrConnectWithoutJobsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: TagWhereUniqueInput;

    @Field(() => TagCreateWithoutJobsInput, {nullable:false})
    create!: TagCreateWithoutJobsInput;
}
