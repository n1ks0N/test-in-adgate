import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from './AuthContext';

const AuthWrapper = ({ children }: { children: JSX.Element }) => {
  const location: any = useLocation();
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default AuthWrapper;
