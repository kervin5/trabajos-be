import { registerEnumType } from '@nestjs/graphql';

export enum LocationOrderByRelevanceFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(LocationOrderByRelevanceFieldEnum, { name: 'LocationOrderByRelevanceFieldEnum', description: undefined })
