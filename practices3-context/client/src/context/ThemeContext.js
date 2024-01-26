/** @format */

import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    console.log(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children} </ThemeContext.Provider>
  );
};

 export const useTheme =() => useContext(ThemeContext); //created custom context hook