import React, { useState } from "react";
import "./studentsignin.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar.jsx";

const StudentSignin = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/Signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password}),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.status === "success") {
          const { email} = data.userDetails;
          localStorage.setItem("email", email);
          console.log(data.message);
          navigate("/Student Dashboard");
        } else {
          console.log("Login failed:", data.status);
        }
      } else {
        const data = await response.json(); // <- Read the error message from the response
        console.log("Login failed:", data.status); // <- This line is problematic
      }
    } catch (error) {
      console.log("Error during login:", error);
    }
  };

  return (
    <>
      <TopBar />
      <div className="loginclassName">
        <div className="loginform">
          <div className="container3">
            <center>
              <h2>Student SignIn</h2>
            </center>
            <br></br>
            <form
              method="post"
              onSubmit={handleLogin}
              action="http://localhost:5000/Signin"
            >
              <div className="signin-form">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  onChange={(e) => setemail(e.target.value)}
                ></input>
              </div>
              <div className="signin-form">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
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
                  <Link to="/Student Register">Register now</Link>
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
          </ul>
        </nav>
      </div>
    </>
  );
};

export default StudentSignin;
