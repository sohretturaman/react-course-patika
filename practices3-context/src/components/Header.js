/** @format */

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
    const {theme,setTheme} =useContext(ThemeContext); 
  return (
    <div>
      <h1>Context Api Example !!</h1>
      <p>Theme value : {theme}</p>
      <button onClick={()=>setTheme(theme==='dark'? 'light':'dark')}>Change Theme</button>
    </div>
  );
}

export default Header;
