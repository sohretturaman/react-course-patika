/** @format */

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Button() {
    
    const {theme,setTheme} = useContext(ThemeContext); 
  return (
    <div>
      <h3>Theme Val : {theme}</h3>
      <button onClick={()=>setTheme(theme==='dark'?'light':'dark')}>Change Theme</button>
    </div>
  );
}

export default Button;
