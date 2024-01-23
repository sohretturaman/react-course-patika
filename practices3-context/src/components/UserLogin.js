/** @format */

import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function UserLogin() {
  const { user, setUser } = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState({ name: "", lastName: "" });
  console.log('user ',user);

  const handleLogin = (event) => {
    console.log("logininfo value", loginInfo);
    event.preventDefault();

    setUser({ name: loginInfo.name, lastName: loginInfo.lastName });
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Enter your name"
          onChange={(e) => setLoginInfo({ ...user, name: e.target.value })}
          value={loginInfo.name}
        />
        <br />
        <input
          placeholder="Enter your last name"
          onChange={(e) => setLoginInfo({ ...user, lastName: e.target.value })}
          value={loginInfo.lastName}
        />
        <br />
        <button>Login </button>
      </form>

      <br />
      <card>{JSON.stringify(user)} </card>
    </div>
  );
}

export default UserLogin;
