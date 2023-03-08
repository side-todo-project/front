// context api
import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext({
  user: null,
  setUser: null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUserInfo = () => {
  return useContext(UserContext);
}