import { registerEnumType } from '@nestjs/graphql';

export enum JobOrderByRelevanceFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    authorId = "authorId",
    locationId = "locationId",
    companyId = "companyId",
    externalUrl = "externalUrl"
}


registerEnumType(JobOrderByRelevanceFieldEnum, { name: 'JobOrderByRelevanceFieldEnum', description: undefined })
