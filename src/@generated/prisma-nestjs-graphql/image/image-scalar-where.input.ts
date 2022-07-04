import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ImageScalarWhereInput {

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    AND?: Array<ImageScalarWhereInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    OR?: Array<ImageScalarWhereInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    NOT?: Array<ImageScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    path?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bucket?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    jobId?: StringNullableFilter;
}
