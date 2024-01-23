/** @format */

import React  from "react";
import Header from "./Header";
import { useTheme } from "../context/ThemeContext";
import styles from "./style.module.css";
import UserLogin from "./UserLogin";
function Main() {
  const { theme } = useTheme();
  return (
    <div className={`${styles.app} ${styles[theme]}`}>
    {/*   <Header />
      <hr />
      <Button /> */}
       <Header />
       <hr/>
       <br/>
      <UserLogin/>
    </div>
  );
}

export default Main;

/**
 * you cant give styles in an array in react
 *  <div className={`${styles.app} ${styles[theme]}`}>  İmportant!!!
 * styles[theme] to give theme value into style file
 */
