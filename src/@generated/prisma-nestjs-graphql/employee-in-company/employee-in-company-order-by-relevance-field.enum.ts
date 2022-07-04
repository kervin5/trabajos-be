import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeInCompanyOrderByRelevanceFieldEnum {
    companyId = "companyId",
    employeeId = "employeeId"
}


registerEnumType(EmployeeInCompanyOrderByRelevanceFieldEnum, { name: 'EmployeeInCompanyOrderByRelevanceFieldEnum', description: undefined })
