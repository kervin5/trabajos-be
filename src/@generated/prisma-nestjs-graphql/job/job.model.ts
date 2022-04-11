import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { JobStatus } from '../prisma/job-status.enum';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { HideField } from '@nestjs/graphql';
import { Location } from '../location/location.model';
import { JobSource } from '../prisma/job-source.enum';
import { Company } from '../company/company.model';
import { Image } from '../image/image.model';
import { Tag } from '../tag/tag.model';
import { JobCount } from './job-count.output';

@ObjectType()
export class Job {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    expiresAt!: Date | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => JobStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof JobStatus;

    @Field(() => Int, {nullable:false,defaultValue:0})
    views!: number;

    @Field(() => User, {nullable:true})
    author?: User | null;

    @HideField()
    authorId!: string | null;

    @Field(() => Location, {nullable:true})
    location?: Location | null;

    @Field(() => String, {nullable:true})
    locationId!: string | null;

    @Field(() => JobSource, {nullable:false,defaultValue:'INTERNAL'})
    source!: keyof typeof JobSource;

    @Field(() => Company, {nullable:true})
    company?: Company | null;

    @Field(() => String, {nullable:true})
    companyId!: string | null;

    @Field(() => [Image], {nullable:true})
    images?: Array<Image>;

    @Field(() => String, {nullable:true})
    externalUrl!: string | null;

    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;

    @Field(() => JobCount, {nullable:false})
    _count?: JobCount;
}
