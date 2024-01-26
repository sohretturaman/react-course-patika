/** @format */

import React, { useState } from "react";
import {sendColor} from '../../SoketApi'
function Platte({activeColor}) {
  const [color, setColor] = useState('');


  const handleColorSoket=()=>{  
    sendColor(color); 
  }
  return (
    <div className="palette">
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setColor(e.target.value)}
      />
      <br />
      <button onClick={handleColorSoket}> Submit Color</button>
  
  
    </div>
  );
}

export default Platte;
