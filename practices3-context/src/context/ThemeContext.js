/** @format */

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const value = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children} </ThemeContext.Provider>
  );
};
