import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyCreateWithoutEmployeeInput } from './employee-in-company-create-without-employee.input';
import { EmployeeInCompanyCreateOrConnectWithoutEmployeeInput } from './employee-in-company-create-or-connect-without-employee.input';
import { EmployeeInCompanyUpsertWithWhereUniqueWithoutEmployeeInput } from './employee-in-company-upsert-with-where-unique-without-employee.input';
import { EmployeeInCompanyCreateManyEmployeeInputEnvelope } from './employee-in-company-create-many-employee-input-envelope.input';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';
import { EmployeeInCompanyUpdateWithWhereUniqueWithoutEmployeeInput } from './employee-in-company-update-with-where-unique-without-employee.input';
import { EmployeeInCompanyUpdateManyWithWhereWithoutEmployeeInput } from './employee-in-company-update-many-with-where-without-employee.input';
import { EmployeeInCompanyScalarWhereInput } from './employee-in-company-scalar-where.input';

@InputType()
export class EmployeeInCompanyUpdateManyWithoutEmployeeNestedInput {

    @Field(() => [EmployeeInCompanyCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<EmployeeInCompanyCreateWithoutEmployeeInput>;

    @Field(() => [EmployeeInCompanyCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<EmployeeInCompanyCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [EmployeeInCompanyUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    upsert?: Array<EmployeeInCompanyUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => EmployeeInCompanyCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: EmployeeInCompanyCreateManyEmployeeInputEnvelope;

    @Field(() => [EmployeeInCompanyWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeInCompanyWhereUniqueInput>;

    @Field(() => [EmployeeInCompanyWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeInCompanyWhereUniqueInput>;

    @Field(() => [EmployeeInCompanyWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeInCompanyWhereUniqueInput>;

    @Field(() => [EmployeeInCompanyWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeInCompanyWhereUniqueInput>;

    @Field(() => [EmployeeInCompanyUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    update?: Array<EmployeeInCompanyUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [EmployeeInCompanyUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    updateMany?: Array<EmployeeInCompanyUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [EmployeeInCompanyScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeInCompanyScalarWhereInput>;
}
