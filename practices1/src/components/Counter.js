/** @format */

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count} </h2>

      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(1)}>Increase</button>
    </div>
  );
}

export default Counter;
