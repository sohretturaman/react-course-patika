/** @format */

import { createContext, useContext, useState } from "react";


const initialState = {
  id: "",
  name: "",
  lastName: "",
};
 const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};

export const useUserContext =()=> useContext(UserContext); 