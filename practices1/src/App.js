/** @format */

import { useState } from "react";
import "./App.css";

import Unmount from "./components/Unmount";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="App">
      {isVisible && <Unmount />}
      <button onClick={() => setIsVisible(!isVisible)}>
        {" "}
        unmount the componet
      </button>
    </div>
  );
}

export default App;
