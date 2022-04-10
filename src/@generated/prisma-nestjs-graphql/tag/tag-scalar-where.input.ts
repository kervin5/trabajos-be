import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class TagScalarWhereInput {

    @Field(() => [TagScalarWhereInput], {nullable:true})
    AND?: Array<TagScalarWhereInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    OR?: Array<TagScalarWhereInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    NOT?: Array<TagScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;
}
