import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EmployeeInCompanyUncheckedUpdateManyWithoutCompanyNestedInput } from '../employee-in-company/employee-in-company-unchecked-update-many-without-company-nested.input';
import { JobUncheckedUpdateManyWithoutCompanyNestedInput } from '../job/job-unchecked-update-many-without-company-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class CompanyUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EmployeeInCompanyUncheckedUpdateManyWithoutCompanyNestedInput, {nullable:true})
    employees?: EmployeeInCompanyUncheckedUpdateManyWithoutCompanyNestedInput;

    @Field(() => JobUncheckedUpdateManyWithoutCompanyNestedInput, {nullable:true})
    jobs?: JobUncheckedUpdateManyWithoutCompanyNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: BoolFieldUpdateOperationsInput;
}
