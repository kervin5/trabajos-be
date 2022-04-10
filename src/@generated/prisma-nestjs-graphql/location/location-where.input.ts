import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { JobListRelationFilter } from '../job/job-list-relation-filter.input';

@InputType()
export class LocationWhereInput {

    @Field(() => [LocationWhereInput], {nullable:true})
    AND?: Array<LocationWhereInput>;

    @Field(() => [LocationWhereInput], {nullable:true})
    OR?: Array<LocationWhereInput>;

    @Field(() => [LocationWhereInput], {nullable:true})
    NOT?: Array<LocationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    latitude?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    longitude?: FloatFilter;

    @Field(() => JobListRelationFilter, {nullable:true})
    jobs?: JobListRelationFilter;
}
