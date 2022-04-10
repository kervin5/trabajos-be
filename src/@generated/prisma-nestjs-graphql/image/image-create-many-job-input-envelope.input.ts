import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateManyJobInput } from './image-create-many-job.input';

@InputType()
export class ImageCreateManyJobInputEnvelope {

    @Field(() => [ImageCreateManyJobInput], {nullable:false})
    data!: Array<ImageCreateManyJobInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
