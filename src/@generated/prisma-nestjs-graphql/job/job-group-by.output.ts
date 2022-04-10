import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { JobStatus } from '../prisma/job-status.enum';
import { Int } from '@nestjs/graphql';
import { JobSource } from '../prisma/job-source.enum';
import { JobCountAggregate } from './job-count-aggregate.output';
import { JobAvgAggregate } from './job-avg-aggregate.output';
import { JobSumAggregate } from './job-sum-aggregate.output';
import { JobMinAggregate } from './job-min-aggregate.output';
import { JobMaxAggregate } from './job-max-aggregate.output';

@ObjectType()
export class JobGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => JobStatus, {nullable:false})
    status!: keyof typeof JobStatus;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => String, {nullable:true})
    locationId?: string;

    @Field(() => JobSource, {nullable:false})
    source!: keyof typeof JobSource;

    @Field(() => String, {nullable:true})
    companyId?: string;

    @Field(() => String, {nullable:true})
    externalUrl?: string;

    @Field(() => JobCountAggregate, {nullable:true})
    _count?: JobCountAggregate;

    @Field(() => JobAvgAggregate, {nullable:true})
    _avg?: JobAvgAggregate;

    @Field(() => JobSumAggregate, {nullable:true})
    _sum?: JobSumAggregate;

    @Field(() => JobMinAggregate, {nullable:true})
    _min?: JobMinAggregate;

    @Field(() => JobMaxAggregate, {nullable:true})
    _max?: JobMaxAggregate;
}
