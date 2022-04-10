import { registerEnumType } from '@nestjs/graphql';

export enum JobStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    CLOSED = "CLOSED",
    DELETED = "DELETED",
    EXPIRED = "EXPIRED"
}


registerEnumType(JobStatus, { name: 'JobStatus', description: undefined })
