import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutJobsInput } from './tag-update-without-jobs.input';
import { TagCreateWithoutJobsInput } from './tag-create-without-jobs.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutJobsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    where!: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutJobsInput, {nullable:false})
    update!: TagUpdateWithoutJobsInput;

    @Field(() => TagCreateWithoutJobsInput, {nullable:false})
    create!: TagCreateWithoutJobsInput;
}
