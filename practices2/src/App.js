/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes,NavLink } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Users from "./screens/Users";
import Error from "./screens/Error";


function App() {
  return (
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
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/users/*" Component={Users} />
         <Route path="*" Component={Error}/>
      </Routes>
    </Router>
  );
}

export default App;
