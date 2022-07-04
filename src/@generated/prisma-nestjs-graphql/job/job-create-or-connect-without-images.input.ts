import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobCreateWithoutImagesInput } from './job-create-without-images.input';

@InputType()
export class JobCreateOrConnectWithoutImagesInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobCreateWithoutImagesInput, {nullable:false})
    create!: JobCreateWithoutImagesInput;
}
