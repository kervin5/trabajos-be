import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Job } from '../job/job.model';
import { HideField } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { TagCount } from './tag-count.output';

@ObjectType({isAbstract:true})
export class Tag {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    jobs?: Array<Job>;

    @HideField()
    User?: User | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => TagCount, {nullable:false})
    _count?: TagCount;
}
