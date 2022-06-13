import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(false);

  const signin = (authData: any, callback: VoidFunction) => {
    if (
      authData.user === process.env.LOGIN &&
      authData.pass === process.env.PASS
    ) {
      setUser('Admin');
      return callback();
    }
  };

  const signout = (callback: VoidFunction) => {
    setUser(false);
    callback();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
