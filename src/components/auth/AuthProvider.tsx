import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { userSlice } from '../../reducers/userSlice';
import { AuthDataType } from '../../types/types';
import AuthContext from './AuthContext';
import db from '../../utils/db.json';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<any>(false);

  const signin = (authData: AuthDataType, callback: VoidFunction) => {
    dispatch(userSlice.actions.userFetching());
    if (
      authData.pass ===
        db.users.find((item) => item.username === authData.user)?.password ||
      db.users.findIndex(
        (item) => item.hash === localStorage.getItem('sid')
      ) !== -1
    ) {
      if (authData.remember) {
        localStorage.setItem(
          'sid',
          db.users.find((item) => item.username === authData.user)?.hash || ''
        );
      }
      setUser(authData.user);
      dispatch(userSlice.actions.userFetchingSuccess(authData.user));
      return setTimeout(() => callback(), 500); // fake async
    } else {
      dispatch(userSlice.actions.userFetchingError());
    }
  };

  const signout = () => {
    setUser(false);
    localStorage.removeItem('sid');
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
