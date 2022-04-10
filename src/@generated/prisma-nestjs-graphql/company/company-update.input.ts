import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EmployeeInCompanyUpdateManyWithoutCompanyInput } from '../employee-in-company/employee-in-company-update-many-without-company.input';
import { JobUpdateManyWithoutCompanyInput } from '../job/job-update-many-without-company.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class CompanyUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EmployeeInCompanyUpdateManyWithoutCompanyInput, {nullable:true})
    employees?: EmployeeInCompanyUpdateManyWithoutCompanyInput;

    @Field(() => JobUpdateManyWithoutCompanyInput, {nullable:true})
    jobs?: JobUpdateManyWithoutCompanyInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: BoolFieldUpdateOperationsInput;
}
