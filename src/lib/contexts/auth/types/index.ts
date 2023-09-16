export interface ProfileState {
  isLoading: boolean;
  user: {
    email?: string;
    username?: string;
    id: string;
    roles: string[];
    token: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
  }
}