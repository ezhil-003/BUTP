import React from "react";
import "./AdminSignin.css";
import { Link, NavLink } from "react-router-dom";
import TopBar from '../../components/TopBar/TopBar.jsx';

export const AdminSignin = () => {
  return (
    <>
      <TopBar />
      <div className="loginclassName">
        <div className="loginform">
          <div className="container3">
            <center>
              <h2>Admin SignIn</h2>
            </center>
            <br></br>
            <form method="post">
              <div className="signin-form">
                <label for="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                ></input>
              </div>
              <div className="signin-form">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                ></input>
              </div>
              <br></br>
              <div className="signin-form ">
                <input type="submit" value="Sign In"></input>
                <div
                  className="new-user-register-container3"
                  id="newUserRegister"
                ></div>
              </div>
            </form>
          </div>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Student Login</NavLink>
            </li>
            <li>
              <NavLink to="/Faculty Login">Faculty Login</NavLink>
            </li>
            <li>
              <NavLink to="/Support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/Help">Help</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
