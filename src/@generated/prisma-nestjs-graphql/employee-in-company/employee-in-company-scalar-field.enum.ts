import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeInCompanyScalarFieldEnum {
    companyId = "companyId",
    employeeId = "employeeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    role = "role"
}


registerEnumType(EmployeeInCompanyScalarFieldEnum, { name: 'EmployeeInCompanyScalarFieldEnum', description: undefined })
