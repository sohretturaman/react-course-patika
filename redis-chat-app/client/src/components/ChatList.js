import React from 'react'
import styles from './styles.module.css'
import { useChat } from '../context/ChatContext'
import ChatInput from './ChatInput';
const ChatList = () => {
    const {messages} =useChat(); 
    console.log('messahes',messages);
    

  return (
    <div className={styles.listContainer}>
        <div className={styles.chats}>
            <div>
                 <h3>Chats</h3>
            </div>
            <br/>
            <button > 
            <p style={{borderWidth:1, borderColor:'black',borderStyle:'solid',padding:'2px'}}>First Chat</p>
            </button>
               <br/>

              <p> second Chat </p>
         
            
        </div>
        <div className={styles.chatsWrapper}>
        <div className={styles.senderNameWrapper}>
                        <h3>First Chat</h3>
                    </div>
        {messages.map((item)=>{
            return (
                 <div> 
                   
                     <h3>{item.message}</h3>
                    </div>

            )
          })}
        
        
        <footer style={{position:'absolute',bottom:3,padding:10}}>
             <ChatInput/>
        </footer>
        </div>
        
         
    </div>
  )
}

export default ChatList
