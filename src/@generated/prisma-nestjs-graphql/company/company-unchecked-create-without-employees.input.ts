import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobUncheckedCreateNestedManyWithoutCompanyInput } from '../job/job-unchecked-create-nested-many-without-company.input';

@InputType()
export class CompanyUncheckedCreateWithoutEmployeesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => JobUncheckedCreateNestedManyWithoutCompanyInput, {nullable:true})
    jobs?: JobUncheckedCreateNestedManyWithoutCompanyInput;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;
}
