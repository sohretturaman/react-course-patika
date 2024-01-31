/** @format */

import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

const initialVals = [
  { message: "hello", fromMe: true },
  {
    message: "how are you doing ? ", 
    fromMe:true
  },
  {
    message:'I am okay how abou you? ',
    fromMe:false
  },
  {message:'I am good , how is it going there ',
  fromMe:true }
  ,{
    message:'it is going great ? Did you finish the chat app ?',
    fromMe:false
  },
  {message:'yeap! finally',
 fromMe :true},
 {
  message:'Ohh great, I am glad to hear that! Congrats to you ',
  fromMe:false
 },
 {
  message:'Thanks a lot!',
  fromMe:true
 },
 { message: "hello", fromMe: true },
 {
   message: "how are you doing ? ", 
   fromMe:true
 },
 {
   message:'I am okay how abou you? ',
   fromMe:false
 },
 {message:'I am good , how is it going there ',
 fromMe:true }
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