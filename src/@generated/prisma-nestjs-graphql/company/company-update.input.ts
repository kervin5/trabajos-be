import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EmployeeInCompanyUpdateManyWithoutCompanyNestedInput } from '../employee-in-company/employee-in-company-update-many-without-company-nested.input';
import { JobUpdateManyWithoutCompanyNestedInput } from '../job/job-update-many-without-company-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class CompanyUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EmployeeInCompanyUpdateManyWithoutCompanyNestedInput, {nullable:true})
    employees?: EmployeeInCompanyUpdateManyWithoutCompanyNestedInput;

    @Field(() => JobUpdateManyWithoutCompanyNestedInput, {nullable:true})
    jobs?: JobUpdateManyWithoutCompanyNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: BoolFieldUpdateOperationsInput;
}
