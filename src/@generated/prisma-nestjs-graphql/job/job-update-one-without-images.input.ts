import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutImagesInput } from './job-create-without-images.input';
import { JobCreateOrConnectWithoutImagesInput } from './job-create-or-connect-without-images.input';
import { JobUpsertWithoutImagesInput } from './job-upsert-without-images.input';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithoutImagesInput } from './job-update-without-images.input';

@InputType()
export class JobUpdateOneWithoutImagesInput {

    @Field(() => JobCreateWithoutImagesInput, {nullable:true})
    create?: JobCreateWithoutImagesInput;

    @Field(() => JobCreateOrConnectWithoutImagesInput, {nullable:true})
    connectOrCreate?: JobCreateOrConnectWithoutImagesInput;

    @Field(() => JobUpsertWithoutImagesInput, {nullable:true})
    upsert?: JobUpsertWithoutImagesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => JobWhereUniqueInput, {nullable:true})
    connect?: JobWhereUniqueInput;

    @Field(() => JobUpdateWithoutImagesInput, {nullable:true})
    update?: JobUpdateWithoutImagesInput;
}
