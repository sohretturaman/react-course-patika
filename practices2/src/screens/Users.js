/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom"; //useRouteMatch is replaced with useMatch
import User from "./User";
import NewComp from "./NewComp";
//Switch is replaced with Routes in react router dom

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  }, []);
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <div>
            <li key={user.id}>
              <Link to={`/users/${user.id}`} key={user.id}>
                {user.name}{" "}
              </Link>
            </li>
          </div>
        ))}
      </ul>

      <h3> Select a user </h3>

      <Routes>
        <Route exact path="/user"   Component={<NewComp/>}/> 
        <Route path={`/user/:id`} element={<User/>} />
      </Routes>
    </div>
  );
}

export default Users;


{/** Router from App.js

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink  className={({ isActive }) => (isActive ? "active" : "")} to="/">Home</NavLink>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <NavLink   style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }} to="/users">Users</NavLink>
            </li>
       
          </ul>
        </nav>
      </div>
 
            <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/users/*" Component={Users} />
             <Route path="*" Component={Error}/>
          </Routes>
        </Router>*/}