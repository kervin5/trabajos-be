import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateManyAuthorInput } from './job-create-many-author.input';

@InputType()
export class JobCreateManyAuthorInputEnvelope {

    @Field(() => [JobCreateManyAuthorInput], {nullable:false})
    data!: Array<JobCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
