import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateNestedManyWithoutTagsInput } from '../job/job-create-nested-many-without-tags.input';
import { UserCreateNestedOneWithoutTagsInput } from '../user/user-create-nested-one-without-tags.input';

@InputType()
export class TagCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => JobCreateNestedManyWithoutTagsInput, {nullable:true})
    jobs?: JobCreateNestedManyWithoutTagsInput;

    @Field(() => UserCreateNestedOneWithoutTagsInput, {nullable:true})
    User?: UserCreateNestedOneWithoutTagsInput;
}
