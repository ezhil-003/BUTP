import React from "react";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import ProfilePicture from "../../assets/img/Ellipse 3.png";
import Python_logo from "../../assets/img/python logo.png";
import "./StudentDashBoard.css";
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

const StudentDashBorad = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch user data based on email from local storage
    const email = localStorage.getItem('email');
  
    if (email) {
      fetch(`http://localhost:5000/api/dashboard?email=${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched user data:", data);
          setUserData(data);
          localStorage.setItem('userData', JSON.stringify(data));
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    } else {
      // Handle case where email is not available
      setLoading(false);
    }
  }, []);



  return (
    <div className="Wrapper1">
      <SideNavBar />
      <div className="container">
        <div className="profilebar">
          <div className="profile">
            <div className="profileimg">
              <img src={ProfilePicture} alt="profile" />
            </div>
            <span>{userData.userId}</span>
          </div>
        </div>
        <div className="dashboard_container">
          <span className="span1">Dashboard</span>
          <div className="current_semester">
            <div className="container1">
              <span>Current Semester </span>
              <div className="hr1">
                <hr />
              </div>
            </div>
            <div className="subjects">
              <Link to="/Student Result">
                <div className="python_prog">
                  <img src={Python_logo} alt="Python" ></img>
                  <span>Python Programming</span>
                  <span>4th M.Tech</span>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashBorad;
