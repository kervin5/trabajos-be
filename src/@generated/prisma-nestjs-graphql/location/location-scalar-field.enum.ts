import { registerEnumType } from '@nestjs/graphql';

export enum LocationScalarFieldEnum {
    id = "id",
    name = "name",
    latitude = "latitude",
    longitude = "longitude"
}


registerEnumType(LocationScalarFieldEnum, { name: 'LocationScalarFieldEnum', description: undefined })
