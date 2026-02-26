export interface User {
  id: number;
  email: string;
  token: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}