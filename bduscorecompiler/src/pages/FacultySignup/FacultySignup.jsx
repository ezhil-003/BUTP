import React from "react";
import "./FacultySignup.css";
import { Link,NavLink } from "react-router-dom";
import TopBar from '../../components/TopBar/TopBar.jsx';

const FacultySignup = () =>  {
  return (
    <>
      <TopBar/>
      <div className="loginclassName">
        <div className="loginform">
          <div className="container3">
            <center>
              <h2>New Faculty SignUp</h2>
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
              <div class="signin-form">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                ></input>
              </div>
              <div class="signin-form">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                ></input>
              </div>
              <div className="signin-form">
                <label for="password"> Confirm Password</label>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Enter your password again"
                ></input>
                <span>
                  Forget password, <a href="reset.html">reset here</a>
                </span>
              </div>
              <div className="signin-form ">
                <input type="submit" value="Sign Up"></input>
                <div
                  className="new-user-register-container"
                  id="newUserRegister"
                >
                  <span>Already an User? </span>{" "}
                  <Link to="/Faculty Login">
                    Login now
                  </Link>
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
  );
}

export default FacultySignup;
