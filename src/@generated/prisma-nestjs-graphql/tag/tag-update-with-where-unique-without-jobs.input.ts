import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutJobsInput } from './tag-update-without-jobs.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutJobsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutJobsInput, {nullable:false})
    data!: TagUpdateWithoutJobsInput;
}
