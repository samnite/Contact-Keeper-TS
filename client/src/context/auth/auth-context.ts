import { createContext } from 'react';

interface AuthStateTypes {}

const AuthContext = createContext({} as AuthStateTypes);

export default AuthContext;
