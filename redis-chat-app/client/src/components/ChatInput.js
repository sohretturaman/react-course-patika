import React, { useState } from "react";
import styles from './styles.module.css'
import { useChat } from "../context/ChatContext";
import { sendMessage } from "../SocketService";

const ChatInput = () => {
  const [message,setMessage] =useState(''); 
const{setMessages} = useChat();  
  const handleSubmit =(e)=>{
    e.preventDefault(); // Prevent default form submission
    
    setMessages((prev)=>[...prev,{message}])
    sendMessage(message); 
    setMessage('');
  }
  
  return (
    <>
    <form onSubmit={handleSubmit} className={styles.chatInputContainer}> 
     <input
         className={styles.input}
         placeholder="Write a new message"
         value={message}
         onChange={(e)=>setMessage(e.target.value)}
         
           />
           <button type="submit" className={styles.sendButton}>Send</button>
    </form>
    </>
  )
 
  
};

export default ChatInput;