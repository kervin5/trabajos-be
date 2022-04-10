import { registerEnumType } from '@nestjs/graphql';

export enum SystemRole {
    ADMIN = "ADMIN",
    CANDIDATE = "CANDIDATE",
    EMPLOYER = "EMPLOYER"
}


registerEnumType(SystemRole, { name: 'SystemRole', description: undefined })
