import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeInCompanyCreateWithoutCompanyInput } from './employee-in-company-create-without-company.input';
import { EmployeeInCompanyCreateOrConnectWithoutCompanyInput } from './employee-in-company-create-or-connect-without-company.input';
import { EmployeeInCompanyUpsertWithWhereUniqueWithoutCompanyInput } from './employee-in-company-upsert-with-where-unique-without-company.input';
import { EmployeeInCompanyCreateManyCompanyInputEnvelope } from './employee-in-company-create-many-company-input-envelope.input';
import { EmployeeInCompanyWhereUniqueInput } from './employee-in-company-where-unique.input';
import { EmployeeInCompanyUpdateWithWhereUniqueWithoutCompanyInput } from './employee-in-company-update-with-where-unique-without-company.input';
import { EmployeeInCompanyUpdateManyWithWhereWithoutCompanyInput } from './employee-in-company-update-many-with-where-without-company.input';
import { EmployeeInCompanyScalarWhereInput } from './employee-in-company-scalar-where.input';

@InputType()
export class EmployeeInCompanyUncheckedUpdateManyWithoutCompanyNestedInput {

    @Field(() => [EmployeeInCompanyCreateWithoutCompanyInput], {nullable:true})
    create?: Array<EmployeeInCompanyCreateWithoutCompanyInput>;

    @Field(() => [EmployeeInCompanyCreateOrConnectWithoutCompanyInput], {nullable:true})
    connectOrCreate?: Array<EmployeeInCompanyCreateOrConnectWithoutCompanyInput>;

    @Field(() => [EmployeeInCompanyUpsertWithWhereUniqueWithoutCompanyInput], {nullable:true})
    upsert?: Array<EmployeeInCompanyUpsertWithWhereUniqueWithoutCompanyInput>;

    @Field(() => EmployeeInCompanyCreateManyCompanyInputEnvelope, {nullable:true})
    createMany?: EmployeeInCompanyCreateManyCompanyInputEnvelope;

    @Field(() => [EmployeeInCompanyWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeInCompanyWhereUniqueInput>;

    @Field(() => [EmployeeInCompanyWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeInCompanyWhereUniqueInput>;

    @Field(() => [EmployeeInCompanyWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeInCompanyWhereUniqueInput>;

    @Field(() => [EmployeeInCompanyWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeInCompanyWhereUniqueInput>;

    @Field(() => [EmployeeInCompanyUpdateWithWhereUniqueWithoutCompanyInput], {nullable:true})
    update?: Array<EmployeeInCompanyUpdateWithWhereUniqueWithoutCompanyInput>;

    @Field(() => [EmployeeInCompanyUpdateManyWithWhereWithoutCompanyInput], {nullable:true})
    updateMany?: Array<EmployeeInCompanyUpdateManyWithWhereWithoutCompanyInput>;

    @Field(() => [EmployeeInCompanyScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeInCompanyScalarWhereInput>;
}
