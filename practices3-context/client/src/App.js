/** @format */

/* import Main from "./components/Main";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserContextProvider } from "./context/UserContext"; */
import { useEffect } from "react";
import "./App.css";
import Platte from "./components/realtimeserver/Platte";
import {init} from './SoketApi'

function App() {

  useEffect(()=>{
     init(); 
  },[])
  return (
    <div className="App">
   
      <br />
      <Platte />
    </div>
    /*  <ThemeContextProvider>
      <UserContextProvider>
        <Main />
      </UserContextProvider>
    </ThemeContextProvider> */
  );
}

export default App;
