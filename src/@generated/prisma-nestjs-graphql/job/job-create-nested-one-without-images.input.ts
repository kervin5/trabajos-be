import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutImagesInput } from './job-create-without-images.input';
import { JobCreateOrConnectWithoutImagesInput } from './job-create-or-connect-without-images.input';
import { JobWhereUniqueInput } from './job-where-unique.input';

@InputType()
export class JobCreateNestedOneWithoutImagesInput {

    @Field(() => JobCreateWithoutImagesInput, {nullable:true})
    create?: JobCreateWithoutImagesInput;

    @Field(() => JobCreateOrConnectWithoutImagesInput, {nullable:true})
    connectOrCreate?: JobCreateOrConnectWithoutImagesInput;

    @Field(() => JobWhereUniqueInput, {nullable:true})
    connect?: JobWhereUniqueInput;
}
