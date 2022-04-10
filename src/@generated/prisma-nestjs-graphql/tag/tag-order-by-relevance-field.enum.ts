import { registerEnumType } from '@nestjs/graphql';

export enum TagOrderByRelevanceFieldEnum {
    id = "id",
    name = "name",
    userId = "userId"
}


registerEnumType(TagOrderByRelevanceFieldEnum, { name: 'TagOrderByRelevanceFieldEnum', description: undefined })
