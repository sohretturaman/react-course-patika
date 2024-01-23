/** @format */

import React, { useContext } from "react";
import Button from "./Button";
import Header from "./Header";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./style.module.css";
function Main() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <Header />
      <hr />

      <Button />
    </div>
  );
}

export default Main;

/**
 * you cant give styles in an array in react
 *  <div className={`${styles.app} ${styles[theme]}`}>  İmportant!!!
 * styles[theme] to give theme value into style file
 */
