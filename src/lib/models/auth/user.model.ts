export interface ProfileUser {
  email?: string;
  username?: string;
  id: string;
  roles: string[];
  token: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
}

export interface UserAuthenticate {
  email?: string;
  username?: string;
  id: string;
  roles: string[];
  token: string;
}
