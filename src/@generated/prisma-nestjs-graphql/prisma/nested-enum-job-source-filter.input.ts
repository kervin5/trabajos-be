import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobSource } from './job-source.enum';

@InputType()
export class NestedEnumJobSourceFilter {

    @Field(() => JobSource, {nullable:true})
    equals?: keyof typeof JobSource;

    @Field(() => [JobSource], {nullable:true})
    in?: Array<keyof typeof JobSource>;

    @Field(() => [JobSource], {nullable:true})
    notIn?: Array<keyof typeof JobSource>;

    @Field(() => NestedEnumJobSourceFilter, {nullable:true})
    not?: NestedEnumJobSourceFilter;
}
