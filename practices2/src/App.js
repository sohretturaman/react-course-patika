/** @format */

import React, { useMemo, useState } from "react";

import "./App.css";
import Header from "./reactMemo/Header";


function App() {
const [number,setNumber] =useState(0); 
//const data ={name:"Meryem sohret",age:21,city:"istanbul"} // even the data is same
// it is gonna re render each time when I click on button because it is not memoized
 

const data = useMemo(()=>{
  return {name:"Meryem sohret",age:21,city:"istanbul"}
},[]) // that updates data based on dependecy

return (
    <div className="App">  
     <Header  data={data} />
     <hr/>
      {number}
        <button onClick={() => setNumber(number + 1)}>press</button>
    </div>
  );
}

export default App;
