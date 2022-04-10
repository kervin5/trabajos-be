import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobCreateWithoutAuthorInput } from './job-create-without-author.input';

@InputType()
export class JobCreateOrConnectWithoutAuthorInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobCreateWithoutAuthorInput, {nullable:false})
    create!: JobCreateWithoutAuthorInput;
}
