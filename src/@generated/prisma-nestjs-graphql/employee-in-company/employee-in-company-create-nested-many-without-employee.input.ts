import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyCreateWithoutEmployeeInput } from './employee-in-company-create-without-employee.input';
import { EmployeeInCompanyCreateOrConnectWithoutEmployeeInput } from './employee-in-company-create-or-connect-without-employee.input';
import { EmployeeInCompanyCreateManyEmployeeInputEnvelope } from './employee-in-company-create-many-employee-input-envelope.input';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';

@InputType()
export class EmployeeInCompanyCreateNestedManyWithoutEmployeeInput {

    @Field(() => [EmployeeInCompanyCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<EmployeeInCompanyCreateWithoutEmployeeInput>;

    @Field(() => [EmployeeInCompanyCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<EmployeeInCompanyCreateOrConnectWithoutEmployeeInput>;

    @Field(() => EmployeeInCompanyCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: EmployeeInCompanyCreateManyEmployeeInputEnvelope;

    @Field(() => [EmployeeInCompanyWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeInCompanyWhereUniqueInput>;
}
