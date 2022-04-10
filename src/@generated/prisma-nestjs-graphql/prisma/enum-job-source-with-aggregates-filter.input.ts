import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobSource } from './job-source.enum';
import { NestedEnumJobSourceWithAggregatesFilter } from './nested-enum-job-source-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumJobSourceFilter } from './nested-enum-job-source-filter.input';

@InputType()
export class EnumJobSourceWithAggregatesFilter {

    @Field(() => JobSource, {nullable:true})
    equals?: keyof typeof JobSource;

    @Field(() => [JobSource], {nullable:true})
    in?: Array<keyof typeof JobSource>;

    @Field(() => [JobSource], {nullable:true})
    notIn?: Array<keyof typeof JobSource>;

    @Field(() => NestedEnumJobSourceWithAggregatesFilter, {nullable:true})
    not?: NestedEnumJobSourceWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumJobSourceFilter, {nullable:true})
    _min?: NestedEnumJobSourceFilter;

    @Field(() => NestedEnumJobSourceFilter, {nullable:true})
    _max?: NestedEnumJobSourceFilter;
}
