import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithoutLocationInput } from './job-update-without-location.input';
import { JobCreateWithoutLocationInput } from './job-create-without-location.input';

@InputType()
export class JobUpsertWithWhereUniqueWithoutLocationInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobUpdateWithoutLocationInput, {nullable:false})
    update!: JobUpdateWithoutLocationInput;

    @Field(() => JobCreateWithoutLocationInput, {nullable:false})
    create!: JobCreateWithoutLocationInput;
}
