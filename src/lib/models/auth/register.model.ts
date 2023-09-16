import type { ROLES } from "~/lib/constants/roles.constants";

export interface RegisterUserTenancyRequest {
  username: string;

  firstName: string;

  lastName: string;

  email: string;

  password: string;

  roles?: ROLES[];
}
