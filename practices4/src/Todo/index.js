/** @format */

import React, { useState } from "react";
import { ExampleComponent } from "uitrmn";

const defalutItems = [
  {
    name: "item 1",
  },
  {
    name: "item 2",
  },
  {
    name: "item 3",
  },
];
function Todo() {
  const [text, setText] = useState();
  const [items, setItems] = useState(defalutItems);
  const addTodo = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText("");
  };
  return (
    <div>
      <div>
        my first react library
        <ExampleComponent text="hello world" />
      </div>
      <br />
      <label>
        Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>

      <button onClick={addTodo}>Submit</button>

      {items.map((item, index) => {
        return (
          <div key={index}>
            <p> {item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
