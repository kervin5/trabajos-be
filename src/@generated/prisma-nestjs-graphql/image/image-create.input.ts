import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateNestedOneWithoutImagesInput } from '../job/job-create-nested-one-without-images.input';

@InputType()
export class ImageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:false})
    bucket!: string;

    @Field(() => JobCreateNestedOneWithoutImagesInput, {nullable:true})
    job?: JobCreateNestedOneWithoutImagesInput;
}
