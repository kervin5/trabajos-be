import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EmployeeInCompanyUncheckedUpdateManyWithoutCompanyInput } from '../employee-in-company/employee-in-company-unchecked-update-many-without-company.input';
import { JobUncheckedUpdateManyWithoutCompanyInput } from '../job/job-unchecked-update-many-without-company.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class CompanyUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EmployeeInCompanyUncheckedUpdateManyWithoutCompanyInput, {nullable:true})
    employees?: EmployeeInCompanyUncheckedUpdateManyWithoutCompanyInput;

    @Field(() => JobUncheckedUpdateManyWithoutCompanyInput, {nullable:true})
    jobs?: JobUncheckedUpdateManyWithoutCompanyInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: BoolFieldUpdateOperationsInput;
}
