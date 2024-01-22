/** @format */

import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import Header from "./reactMemo/Header";


function App() {
const [number,setNumber] =useState(0); 
//const data ={name:"Meryem sohret",age:21,city:"istanbul"} // even the data is same
// it is gonna re render each time when I click on button because it is not memoized
 

const data = useMemo(()=>{
  
  return {name:"Meryem sohret",age:21,city:"istanbul"}
},[]) // that updates data based on dependecy

const handleIncrement=useCallback(()=>{
 setNumber((prev)=>prev+1); // dont use number state, otherwise need to use number state in dependency, 
 //that couses rerender in header component
},[])

return (
    <div className="App">  
     <Header increment={handleIncrement} data={data} />
     {number}
     <hr/>
     
    </div>
  );
}

export default App;
