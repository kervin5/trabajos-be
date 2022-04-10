import { registerEnumType } from '@nestjs/graphql';

export enum JobSource {
    INTERNAL = "INTERNAL",
    EXTERNAL = "EXTERNAL"
}


registerEnumType(JobSource, { name: 'JobSource', description: undefined })
