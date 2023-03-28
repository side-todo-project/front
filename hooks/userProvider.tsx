// context api
import { IUserInfo } from '@/types';
import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext<{
  user: IUserInfo | null;
  setUser: React.Dispatch<React.SetStateAction<IUserInfo | null>>;
}>({
  user: null,
  setUser: null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<IUserInfo | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUserInfo = () => {
  return useContext(UserContext);
};
