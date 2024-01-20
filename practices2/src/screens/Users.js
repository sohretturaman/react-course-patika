/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
    const [users,setUsers] =useState([]); 
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  }, []);
  return (
    <div>
        <h1>Users List</h1>
      <ul>
        {users.map((user)=><div>
            <li>
            <Link to={`/user/${user.id}`} key={user.id}>{user.name} </Link>
            </li>
           
        </div>)}
        
      </ul>
      <Link to="/user/1"> go to user</Link>
      
      </div>
  );
}

export default Users;
