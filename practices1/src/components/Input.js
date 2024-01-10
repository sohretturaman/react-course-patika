/** @format */

import React, { useState } from "react";

function Input() {
  const [values, setValues] = useState({ name: "", surname: "" });
  const [friends, setFriends] = useState([
    { name: "meryem", surname: "sohret" },
  ]);

  const handleOnChangeInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = () => {
    console.log("values from input", values);
    setFriends([...friends, values]);
  };
  return (
    <div>
      {/*   input example
      <h1>Name :{values.name} </h1>
      please enter your surname:
      <input name="name" value={values.name} onChange={handleOnChangeInput} />
      <br />
      please enter your surname:
      <input
        name="surname"
        value={values.surname}
        onChange={handleOnChangeInput}
      />
      <br />
      name and surname : {values.name} {values.surname}
      <hr />
      <br></br> */}
      <h2>My Friends</h2> <br />
      {friends.map((friend, index) => (
        <div key={index}>
          {friend.name} {friend.surname}
          <br />
        </div>
      ))}
      <input name="name" value={values.name} onChange={handleOnChangeInput} />
      <br />
      <input
        name="surname"
        value={values.surname}
        onChange={handleOnChangeInput}
      />
      <br />
      <button onClick={handleOnSubmit}>submit a new friend</button>
    </div>
  );
}

export default Input;
