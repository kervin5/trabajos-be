import { registerEnumType } from '@nestjs/graphql';

export enum UserRoleInCompany {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    RECRUITER = "RECRUITER"
}


registerEnumType(UserRoleInCompany, { name: 'UserRoleInCompany', description: undefined })
