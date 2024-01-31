import React from "react";
import styles from './styles.module.css'

const ChatInput = () => {
  return <div
  className={styles.chatInputContainer}>

     <input
     className={styles.input}
     placeholder="Write a new message"
    
       />
       <button className={styles.sendButton} >Send</button>
  </div>;
};

export default ChatInput;
