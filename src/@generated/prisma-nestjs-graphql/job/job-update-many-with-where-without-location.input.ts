import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobScalarWhereInput } from './job-scalar-where.input';
import { JobUpdateManyMutationInput } from './job-update-many-mutation.input';

@InputType()
export class JobUpdateManyWithWhereWithoutLocationInput {

    @Field(() => JobScalarWhereInput, {nullable:false})
    where!: JobScalarWhereInput;

    @Field(() => JobUpdateManyMutationInput, {nullable:false})
    data!: JobUpdateManyMutationInput;
}
