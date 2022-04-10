import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmployeeInCompanyCountAggregate } from './employee-in-company-count-aggregate.output';
import { EmployeeInCompanyMinAggregate } from './employee-in-company-min-aggregate.output';
import { EmployeeInCompanyMaxAggregate } from './employee-in-company-max-aggregate.output';

@ObjectType()
export class AggregateEmployeeInCompany {

    @Field(() => EmployeeInCompanyCountAggregate, {nullable:true})
    _count?: EmployeeInCompanyCountAggregate;

    @Field(() => EmployeeInCompanyMinAggregate, {nullable:true})
    _min?: EmployeeInCompanyMinAggregate;

    @Field(() => EmployeeInCompanyMaxAggregate, {nullable:true})
    _max?: EmployeeInCompanyMaxAggregate;
}
