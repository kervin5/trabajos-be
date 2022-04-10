import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutJobsInput } from './tag-create-without-jobs.input';
import { TagCreateOrConnectWithoutJobsInput } from './tag-create-or-connect-without-jobs.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUncheckedCreateNestedManyWithoutJobsInput {

    @Field(() => [TagCreateWithoutJobsInput], {nullable:true})
    create?: Array<TagCreateWithoutJobsInput>;

    @Field(() => [TagCreateOrConnectWithoutJobsInput], {nullable:true})
    connectOrCreate?: Array<TagCreateOrConnectWithoutJobsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    connect?: Array<TagWhereUniqueInput>;
}
