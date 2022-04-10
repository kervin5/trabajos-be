import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithoutAuthorInput } from './job-update-without-author.input';
import { JobCreateWithoutAuthorInput } from './job-create-without-author.input';

@InputType()
export class JobUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobUpdateWithoutAuthorInput, {nullable:false})
    update!: JobUpdateWithoutAuthorInput;

    @Field(() => JobCreateWithoutAuthorInput, {nullable:false})
    create!: JobCreateWithoutAuthorInput;
}
