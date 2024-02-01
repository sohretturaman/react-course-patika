import React, { useEffect } from 'react'
import styles from './styles.module.css'
import ChatList from './ChatList'
import { init, subscribeChat } from '../SocketService'
import { useChat } from '../context/ChatContext'


const MainChat = () => {
  const{setMessages} = useChat(); 
  useEffect(()=>{
      init(); 
      subscribeChat((message)=>
      setMessages((prev)=>[...prev,{message}])) 
  },[setMessages])
  
    
  return (
    <div className={styles.container}>
     
       <ChatList/>
      
    </div>
  )
}

export default MainChat