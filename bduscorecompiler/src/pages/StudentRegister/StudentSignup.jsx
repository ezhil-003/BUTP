import React, { useState } from 'react';
import "./StudentSignup.css";
import { Link,NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import TopBar from "../../components/TopBar/TopBar.jsx";
import axios from 'axios';


const StudentSignup = () =>  {
  const [email, setemail] = useState('')
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const [confpass, setconfpass] = useState('')
  const navigate = useNavigate()
  
  const handlesubmit = (e) => {
    e.preventDefault();
    if (password !== confpass) {
      console.log("Password and Confirm Password do not match");
      return;
    }
  

    axios.post('http://localhost:5000/signup',{email,name,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
    navigate("/StudentSignin")
  }

  return (
    <>
      <TopBar/>
      <div className="loginclassName">
        <div className="loginform">
          <div className="container3">
            <center>
              <h2>Student SignUp</h2>
            </center>
            <br></br>
            <form method="post"
            onSubmit={handlesubmit}>
              <div className="signin-form">
                <label for="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  onChange={(e) => setemail(e.target.value)}
                ></input>
              </div>
              <div class="signin-form">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={(e) => setname(e.target.value)}
                ></input>
              </div>
              <div class="signin-form">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => setpassword(e.target.value)}
                ></input>
              </div>
              <div className="signin-form">
                <label for="password"> Confirm Password</label>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Enter your password again"
                  onChange={(e) => setconfpass(e.target.value)}
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
                  <Link to="/">
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
          <NavLink to="/Faculty Login">Faculty Login</NavLink>
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

export default StudentSignup;
