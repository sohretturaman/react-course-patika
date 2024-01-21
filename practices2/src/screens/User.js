/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
 
  const [user,setUser] =useState({}); 
  const[isLoading,setIsLoading] =useState(true); 
  const { id } = useParams();
  console.log('id from users',id);
  useEffect(()=>{
    
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>setUser(res.data))
    .catch((err)=>console.log('error',err))
    .finally(()=>setIsLoading(false))
  },[id])

  if(isLoading){
    return <div> Loading ...</div>
  }
  return (
    <div>
      <h1>User Details</h1>
      User id {id}
      {!isLoading &&<code>{JSON.stringify(user)}</code>}

      <div>
        <Link to={`/user/${parseInt(id) + 1}`} >Next User</Link>
      </div>
    </div>
  );
};

export default User;

/**
 *  <button onClick={() => window.history.back()}> View Next User</button> 
 * // to go last page 
 * it is like goBack from react native
 */