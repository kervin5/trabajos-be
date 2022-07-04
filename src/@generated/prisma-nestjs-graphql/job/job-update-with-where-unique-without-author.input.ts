import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithoutAuthorInput } from './job-update-without-author.input';

@InputType()
export class JobUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobUpdateWithoutAuthorInput, {nullable:false})
    data!: JobUpdateWithoutAuthorInput;
}
