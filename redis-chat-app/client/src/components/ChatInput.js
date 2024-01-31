import React, { useState } from "react";
import styles from './styles.module.css'
import { useChat } from "../context/ChatContext";

const ChatInput = () => {
  const [message,setMessage] =useState(''); 
const{messages,setMessages} = useChat();  
  const handleSubmit =()=>{
    console.log('message',message);
    console.log('messages *',messages);
    
    setMessages((prev)=>[...prev,{message:message,fromMe:true}])
  
  }
  
  return <div
  className={styles.chatInputContainer}>

     <input
     className={styles.input}
     placeholder="Write a new message"
     value={message}
     onChange={(e)=>setMessage(e.target.value)}
       />
       <button className={styles.sendButton}  onClick={handleSubmit} >Send</button>
  </div>;
};

export default ChatInput;
