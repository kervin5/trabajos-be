import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyCreateManyCompanyInput } from './employee-in-company-create-many-company.input';

@InputType()
export class EmployeeInCompanyCreateManyCompanyInputEnvelope {

    @Field(() => [EmployeeInCompanyCreateManyCompanyInput], {nullable:false})
    data!: Array<EmployeeInCompanyCreateManyCompanyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
