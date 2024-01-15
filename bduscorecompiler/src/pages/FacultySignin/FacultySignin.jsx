import React from 'react';
import "./FacultySignin.css";
import { Link,NavLink } from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar.jsx';

const FacultySignin= () =>  {
  return (
    <>
      <TopBar/>
      <div className="loginclassName">
        <div className="loginform">
          <div className="container3">
            <center>
              <h2>Faculty SignIn</h2>
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
                <span>
                  Forget password, <a href="reset.html">reset here</a>
                </span>
              </div>
              <div className="signin-form ">
                <input type="submit" value="Sign In"></input>
                <div
                  className="new-user-register-container"
                  id="newUserRegister"
                >
                  <span>New user? </span>{" "}
                  <Link to="/Faculty Register">Register now</Link>
                  <br />
                </div>
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
            <NavLink to="/Admin Login">Admin Login</NavLink>
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
      
  )
}

export default FacultySignin;