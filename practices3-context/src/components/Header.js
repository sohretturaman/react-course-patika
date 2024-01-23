/** @format */

import React from "react";
import { useTheme } from "../context/ThemeContext";

function Header() {
    const {theme,setTheme} =useTheme(); 
  return (
    <div>
      <h1>Login Page !!</h1>
     {/*  <p>Theme value : {theme}</p> */}
      <button onClick={()=>setTheme(theme==='dark'? 'light':'dark')}>Change Theme</button>
    </div>
  );
}

export default Header;
