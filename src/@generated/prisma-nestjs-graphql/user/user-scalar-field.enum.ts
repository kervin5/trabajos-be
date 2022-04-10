import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    email = "email",
    password = "password",
    firstName = "firstName",
    lastName = "lastName",
    role = "role",
    phone = "phone",
    emailVerified = "emailVerified",
    phoneVerified = "phoneVerified"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
