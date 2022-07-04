import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeInCompanyCreateManyInput } from './employee-in-company-create-many.input';

@ArgsType()
export class CreateManyEmployeeInCompanyArgs {

    @Field(() => [EmployeeInCompanyCreateManyInput], {nullable:false})
    data!: Array<EmployeeInCompanyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
