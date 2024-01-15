import React from 'react'
import TopBar from '../../components/TopBar/TopBar.jsx';
import { Link,NavLink } from "react-router-dom";

const HelpPage = () => {
  return (
    <>
      <TopBar />
      <h1>This is help Page</h1>
      <nav>
        <ul>
        <li>
            <NavLink to="/">Student Login</NavLink>
            </li>
          <li>
          <NavLink to="/Faculty Login">Faculty Login</NavLink>
            </li>
            <li>
            <NavLink to="/Admin Login">Admin Login</NavLink>
            </li>
            <li>
            <NavLink to="/Support">Support</NavLink>
            </li>
            
            <li>
            <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default HelpPage;
