/** @format */

import React from "react";
import styles from "./styles.module.css";
import { useChat } from "../context/ChatContext";
import ChatInput from "./ChatInput";
import PeopleList from "./PeopleList";

import Header from "./Header";
import ChatItem from "./ChatItem";

const ChatList = () => {
  const { messages } = useChat();
  console.log("messahes", messages);

  return (
    <div className={styles.listContainer}>
    <div className={styles.chats}>
      <PeopleList />
    </div>
    <div className={styles.chatWrapper}> {/* Wrap in a flex container */}
      <div className={styles.chatsWrapper} style={{marginBottom:500}}>
        <div>
          <Header />
        </div>
        {messages.map((item,index) => (
          <div key={index}>
                <ChatItem item={item} key={item.id} />
             </div>
      
        ))}
      </div>
      <ChatInput />
    </div>
  </div>
  );
};

export default ChatList;