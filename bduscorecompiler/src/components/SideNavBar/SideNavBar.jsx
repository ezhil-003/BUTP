import React from "react";
import bdulogo from '../../assets/img/bdulogo.png';
import Dashboard from "../../assets/img/dashboard.svg";
import Result from "../../assets/img/icon _results demographics_.svg";
import AboutUs from "../../assets/img/help.svg";
import Account from "../../assets/img/account_circle.svg";
import Settings from "../../assets/img/settings.svg";
import Logout from "../../assets/img/logout.svg";
import "./SideNavBar.css";
import {Link} from 'react-router-dom';

const SideNavBar = () => {
  return (
    
      <div className="SideBar1">
        <div className="bdulogo1">
          <img src={bdulogo} alt="bdulogo" />
          <span></span>
        </div>
        <div className="component_logo">
          <ul>
            <li>
              <div className="logobtn1">
                <img src={Dashboard} alt="dashboard"></img>
                <span>Dashboard</span>
              </div>
            </li>
            <li>
              <div className="logobtn1">
                <img src={Result} alt="result"></img>
                <span>Result</span>
              </div>
            </li>
            <li>
              <div className="logobtn1">
                <img src={AboutUs} alt="aboutus"></img>
                <span>About us</span>
              </div>
            </li>
            <li>
              <div className="logobtn1">
                <img src={Account} alt="account"></img>
                <Link to='/Student profile' ><span>Account</span></Link>
              </div>
            </li>
            <li>
              <div className="logobtn1">
                <img src={Settings} alt="settings"></img>
                <span>Settings</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="logout_outline1">
          <div className="logout_logo1">
            <span>Logout</span>
            <img src={Logout} alt="logout"></img>
          </div>
        </div>
      </div>
    
  );
};

export default SideNavBar;
