import { registerEnumType } from '@nestjs/graphql';

export enum ImageScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    path = "path",
    bucket = "bucket",
    jobId = "jobId"
}


registerEnumType(ImageScalarFieldEnum, { name: 'ImageScalarFieldEnum', description: undefined })
