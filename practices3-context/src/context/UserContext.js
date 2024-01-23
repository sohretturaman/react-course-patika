/** @format */

import { createContext, useState } from "react";

const initialState = {
  id: "",
  name: "",
  lastName: "",
};
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};
