import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Job } from '../job/job.model';
import { HideField } from '@nestjs/graphql';

@ObjectType({isAbstract:true})
export class Image {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:false})
    bucket!: string;

    @HideField()
    job?: Job | null;

    @Field(() => String, {nullable:true})
    jobId!: string | null;
}
