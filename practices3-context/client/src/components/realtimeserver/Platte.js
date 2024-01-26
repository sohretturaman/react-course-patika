/** @format */

import React, { useState } from "react";
import {sendColor} from '../../SoketApi'
function Platte() {
  const [color, setColor] = useState('');


  const handleColorSoket=()=>{
    console.log('button clikced and color: ',color);
    
    sendColor(color); 
  }
  return (
    <div className="palette">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <br />
      <button onClick={handleColorSoket}> Submit Color</button>
      <br/>
      color : {color}
    </div>
  );
}

export default Platte;
