/** @format */

import React, { useEffect, useState } from "react";
import styles from './users.module.css'
function Users() {
const [users,setUsers] =useState([]); 
    useEffect(()=>{
        const getUsers=async()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=>res.json())
            .then((data)=>setUsers(data))
        }
        getUsers(); 
    },[])

  return (
    <div style={styles.wrapper}>
      <p>hello world</p>
      {users.map((user)=>
      <div>
         {user.name}
      </div> )}
    </div>
  );
}

export default Users;
