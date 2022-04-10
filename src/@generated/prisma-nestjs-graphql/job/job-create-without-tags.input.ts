import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobStatus } from '../prisma/job-status.enum';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutJobsInput } from '../user/user-create-nested-one-without-jobs.input';
import { LocationCreateNestedOneWithoutJobsInput } from '../location/location-create-nested-one-without-jobs.input';
import { JobSource } from '../prisma/job-source.enum';
import { CompanyCreateNestedOneWithoutJobsInput } from '../company/company-create-nested-one-without-jobs.input';
import { ImageCreateNestedManyWithoutJobInput } from '../image/image-create-nested-many-without-job.input';

@InputType()
export class JobCreateWithoutTagsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => JobStatus, {nullable:true})
    status?: keyof typeof JobStatus;

    @Field(() => Int, {nullable:true})
    views?: number;

    @Field(() => UserCreateNestedOneWithoutJobsInput, {nullable:true})
    author?: UserCreateNestedOneWithoutJobsInput;

    @Field(() => LocationCreateNestedOneWithoutJobsInput, {nullable:true})
    location?: LocationCreateNestedOneWithoutJobsInput;

    @Field(() => JobSource, {nullable:true})
    source?: keyof typeof JobSource;

    @Field(() => CompanyCreateNestedOneWithoutJobsInput, {nullable:true})
    company?: CompanyCreateNestedOneWithoutJobsInput;

    @Field(() => ImageCreateNestedManyWithoutJobInput, {nullable:true})
    images?: ImageCreateNestedManyWithoutJobInput;

    @Field(() => String, {nullable:true})
    externalUrl?: string;
}
