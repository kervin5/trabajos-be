import { registerEnumType } from '@nestjs/graphql';

export enum ImageOrderByRelevanceFieldEnum {
    id = "id",
    path = "path",
    bucket = "bucket",
    jobId = "jobId"
}


registerEnumType(ImageOrderByRelevanceFieldEnum, { name: 'ImageOrderByRelevanceFieldEnum', description: undefined })
