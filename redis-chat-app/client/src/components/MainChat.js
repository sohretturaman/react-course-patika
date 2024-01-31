import React, { useState } from 'react'
import styles from './styles.module.css'
import ChatList from './ChatList'


const MainChat = () => {

    
  return (
    <div className={styles.container}>
     
       <ChatList/>
      
    </div>
  )
}

export default MainChat
