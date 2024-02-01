/** @format */

import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

const initialVals = [
  
];
export const    ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState(initialVals);

  const value ={
     messages: messages,
     setMessages:setMessages
  }
  return <ChatContext.Provider value={value}> {children}</ChatContext.Provider>
};

export  const useChat = ()=> useContext(ChatContext); 