/** @format */

import React from "react";
import styles from "./style.module.css";
function AComp() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}> A component</p>
    </div>
  );
}

export default AComp;
//need to use module keyword to can handle your style files which icnlude same names
//with other classnames in project
