/** @format */

import React, { useEffect, useState } from "react";
import styles from "./users.module.css";
import axios from "axios";
function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("an error has been occured",err))
      .finally(() => setIsLoading(false));
  }, []);

  {
    isLoading && <div>Loading..</div>;
  }

  return (
    <div style={styles.wrapper}>
      <p>hello world</p>
      {users.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
}

export default Users;
