import { registerEnumType } from '@nestjs/graphql';

export enum JobScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    expiresAt = "expiresAt",
    title = "title",
    content = "content",
    status = "status",
    views = "views",
    authorId = "authorId",
    locationId = "locationId",
    source = "source",
    companyId = "companyId",
    externalUrl = "externalUrl"
}


registerEnumType(JobScalarFieldEnum, { name: 'JobScalarFieldEnum', description: undefined })
