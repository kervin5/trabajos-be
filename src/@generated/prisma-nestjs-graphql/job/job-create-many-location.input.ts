import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobStatus } from '../prisma/job-status.enum';
import { Int } from '@nestjs/graphql';
import { JobSource } from '../prisma/job-source.enum';

@InputType()
export class JobCreateManyLocationInput {

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

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => JobSource, {nullable:true})
    source?: keyof typeof JobSource;

    @Field(() => String, {nullable:true})
    companyId?: string;

    @Field(() => String, {nullable:true})
    externalUrl?: string;
}
