import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobUpdateWithoutImagesInput } from './job-update-without-images.input';
import { JobCreateWithoutImagesInput } from './job-create-without-images.input';

@InputType()
export class JobUpsertWithoutImagesInput {

    @Field(() => JobUpdateWithoutImagesInput, {nullable:false})
    update!: JobUpdateWithoutImagesInput;

    @Field(() => JobCreateWithoutImagesInput, {nullable:false})
    create!: JobCreateWithoutImagesInput;
}
