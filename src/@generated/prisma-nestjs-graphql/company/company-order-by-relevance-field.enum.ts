import { registerEnumType } from '@nestjs/graphql';

export enum CompanyOrderByRelevanceFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(CompanyOrderByRelevanceFieldEnum, { name: 'CompanyOrderByRelevanceFieldEnum', description: undefined })
