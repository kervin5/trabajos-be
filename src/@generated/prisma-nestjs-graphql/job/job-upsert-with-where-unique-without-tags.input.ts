import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithoutTagsInput } from './job-update-without-tags.input';
import { JobCreateWithoutTagsInput } from './job-create-without-tags.input';

@InputType()
export class JobUpsertWithWhereUniqueWithoutTagsInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobUpdateWithoutTagsInput, {nullable:false})
    update!: JobUpdateWithoutTagsInput;

    @Field(() => JobCreateWithoutTagsInput, {nullable:false})
    create!: JobCreateWithoutTagsInput;
}
