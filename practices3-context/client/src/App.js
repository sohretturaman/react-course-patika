/** @format */

/* import Main from "./components/Main";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserContextProvider } from "./context/UserContext"; */
import { useEffect, useState } from "react";
import "./App.css";
import Platte from "./components/realtimeserver/Platte";
import {init, subscribe} from './SoketApi'

function App() {
  const [savedColor, setSavedColor] =useState('#0F54DE')
  useEffect(()=>{
     init(); //intialize server

     subscribe((color)=>setSavedColor(color)); //initialize func to rich saved color
  },[savedColor])
  //important!! gave a callback func inside subscribe function to being able to use that func inside server file

  console.log('saved color', savedColor);
  
 

  return (
    <div className="App" style={{backgroundColor:savedColor}}>
   
      <br />
      <h2>Active bg Color : {savedColor}</h2>
      <Platte  activeColor= {savedColor}/>
    </div>
    /*  <ThemeContextProvider>
      <UserContextProvider>
        <Main />
      </UserContextProvider>
    </ThemeContextProvider> */
  );
}

export default App;
