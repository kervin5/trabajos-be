import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Job } from '../job/job.model';
import { User } from '../user/user.model';
import { TagCount } from './tag-count.output';

@ObjectType()
export class Tag {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Job], {nullable:true})
    jobs?: Array<Job>;

    @Field(() => User, {nullable:true})
    User?: User | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => TagCount, {nullable:false})
    _count?: TagCount;
}
