/** @format */

import React, { useEffect, useState } from "react";

function Unmount() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("component is mounted");
    const interval = setInterval(() => {
      setCounter((n) => n + 1);
    }, 2000);

    return () => clearInterval(interval);
    //return () => console.log("component is unmounted"); // the place to clean up
  }, []); // give the state which you want to track, if it is empty it will to watch all states

  return (
    <div>
      unmount example
      <h1>created an interval to cahnge counter value automatically</h1>
      <h2>{counter}</h2>
    </div>
  );
}

export default Unmount;
