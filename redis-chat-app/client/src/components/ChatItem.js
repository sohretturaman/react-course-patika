/** @format */

import React from "react";
import styles from "./styles.module.css";
function ChatItem({item}) {

  const messageClassName = item.fromMe ? styles.right : styles.left;

  return (
    <div className={styles.itemWrapper}>
      <div className={messageClassName}>
        <div className={styles.msgText}>{item.message}</div>
      </div>
    </div>
  );
}

export default ChatItem;
