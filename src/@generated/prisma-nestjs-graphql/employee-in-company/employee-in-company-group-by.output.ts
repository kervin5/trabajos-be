import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserRoleInCompany } from '../user/user-role-in-company.enum';
import { EmployeeInCompanyCountAggregate } from './employee-in-company-count-aggregate.output';
import { EmployeeInCompanyMinAggregate } from './employee-in-company-min-aggregate.output';
import { EmployeeInCompanyMaxAggregate } from './employee-in-company-max-aggregate.output';

@ObjectType()
export class EmployeeInCompanyGroupBy {

    @Field(() => String, {nullable:false})
    companyId!: string;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => UserRoleInCompany, {nullable:false})
    role!: keyof typeof UserRoleInCompany;

    @Field(() => EmployeeInCompanyCountAggregate, {nullable:true})
    _count?: EmployeeInCompanyCountAggregate;

    @Field(() => EmployeeInCompanyMinAggregate, {nullable:true})
    _min?: EmployeeInCompanyMinAggregate;

    @Field(() => EmployeeInCompanyMaxAggregate, {nullable:true})
    _max?: EmployeeInCompanyMaxAggregate;
}
