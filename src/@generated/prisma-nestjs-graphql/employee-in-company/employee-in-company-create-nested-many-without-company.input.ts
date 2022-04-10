import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyCreateWithoutCompanyInput } from './employee-in-company-create-without-company.input';
import { EmployeeInCompanyCreateOrConnectWithoutCompanyInput } from './employee-in-company-create-or-connect-without-company.input';
import { EmployeeInCompanyCreateManyCompanyInputEnvelope } from './employee-in-company-create-many-company-input-envelope.input';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';

@InputType()
export class EmployeeInCompanyCreateNestedManyWithoutCompanyInput {

    @Field(() => [EmployeeInCompanyCreateWithoutCompanyInput], {nullable:true})
    create?: Array<EmployeeInCompanyCreateWithoutCompanyInput>;

    @Field(() => [EmployeeInCompanyCreateOrConnectWithoutCompanyInput], {nullable:true})
    connectOrCreate?: Array<EmployeeInCompanyCreateOrConnectWithoutCompanyInput>;

    @Field(() => EmployeeInCompanyCreateManyCompanyInputEnvelope, {nullable:true})
    createMany?: EmployeeInCompanyCreateManyCompanyInputEnvelope;

    @Field(() => [EmployeeInCompanyWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeInCompanyWhereUniqueInput>;
}
