import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateManyLocationInput } from './job-create-many-location.input';

@InputType()
export class JobCreateManyLocationInputEnvelope {

    @Field(() => [JobCreateManyLocationInput], {nullable:false})
    data!: Array<JobCreateManyLocationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
