import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobSource } from './job-source.enum';

@InputType()
export class EnumJobSourceFieldUpdateOperationsInput {

    @Field(() => JobSource, {nullable:true})
    set?: keyof typeof JobSource;
}
