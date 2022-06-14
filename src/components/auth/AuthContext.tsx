import { createContext } from 'react';
import { AuthContextType } from '../../types/types';

const AuthContext = createContext<AuthContextType>(null!);

export default AuthContext;
