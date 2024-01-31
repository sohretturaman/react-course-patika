import React, { useEffect } from 'react'
import styles from './styles.module.css'
import ChatList from './ChatList'
import { init } from '../SocketService'


const MainChat = () => {
  useEffect(()=>{
      init(); 
  },[])
  
    
  return (
    <div className={styles.container}>
     
       <ChatList/>
      
    </div>
  )
}

export default MainChat
