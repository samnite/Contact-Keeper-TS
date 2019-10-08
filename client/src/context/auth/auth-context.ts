import { createContext } from 'react';

export interface FormDataTypes {
  name?: string;
  email: string;
  password: string;
}

interface Methods {
  register: (formData: FormDataTypes) => any;
  loadUser: () => void;
  login: (formData: FormDataTypes) => void;
  logout: () => void;
  clearErrors: () => void;
}

interface AuthStateTypes extends Methods {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  user: { name: string; email: string; password: string; password2: string };
  error: string;
}

const AuthContext = createContext({} as AuthStateTypes);

export default AuthContext;
