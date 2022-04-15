import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EmployeeInCompany } from '../employee-in-company/employee-in-company.model';
import { HideField } from '@nestjs/graphql';
import { Job } from '../job/job.model';
import { CompanyCount } from './company-count.output';

@ObjectType({isAbstract:true})
export class Company {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    employees?: Array<EmployeeInCompany>;

    @HideField()
    jobs?: Array<Job>;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    verified!: boolean;

    @Field(() => CompanyCount, {nullable:false})
    _count?: CompanyCount;
}
