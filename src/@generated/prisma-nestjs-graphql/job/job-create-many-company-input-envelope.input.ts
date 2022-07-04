import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateManyCompanyInput } from './job-create-many-company.input';

@InputType()
export class JobCreateManyCompanyInputEnvelope {

    @Field(() => [JobCreateManyCompanyInput], {nullable:false})
    data!: Array<JobCreateManyCompanyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
