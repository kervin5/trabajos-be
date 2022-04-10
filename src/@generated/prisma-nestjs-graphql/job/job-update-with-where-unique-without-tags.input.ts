import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithoutTagsInput } from './job-update-without-tags.input';

@InputType()
export class JobUpdateWithWhereUniqueWithoutTagsInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobUpdateWithoutTagsInput, {nullable:false})
    data!: JobUpdateWithoutTagsInput;
}
