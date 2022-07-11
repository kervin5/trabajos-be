import { User } from "../models/user.model";

interface AvailableFields {
  displayName?: boolean;
}

export function computeDisplayName(user: User): User | null {
  if (!user) {
    return null;
  }
  return { ...user, displayName: `${user?.firstName} ${user?.lastName}` };
}

export function addComputedFields(
  user: User,
  availableFields?: AvailableFields
): User {
  let computedUser = user;

  if (availableFields.displayName) {
    computedUser = computeDisplayName(computedUser);
  }

  return computedUser;
}

export function addComputedFieldsToMany(
  users: User[],
  availableFields?: AvailableFields
): User[] {
  return users.map((user) => addComputedFields(user, availableFields));
}
