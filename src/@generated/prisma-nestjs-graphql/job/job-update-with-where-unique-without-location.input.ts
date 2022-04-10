import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithoutLocationInput } from './job-update-without-location.input';

@InputType()
export class JobUpdateWithWhereUniqueWithoutLocationInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobUpdateWithoutLocationInput, {nullable:false})
    data!: JobUpdateWithoutLocationInput;
}
