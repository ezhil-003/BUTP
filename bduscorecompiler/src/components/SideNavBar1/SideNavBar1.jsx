import React from "react";
import bdulogo from "../../assets/img/bdulogo.png";
import Dashboard from "../../assets/img/dashboard.svg";
import Result from "../../assets/img/icon _results demographics_.svg";
import AboutUs from "../../assets/img/help.svg";
import Account from "../../assets/img/account_circle.svg";
import Settings from "../../assets/img/settings.svg";
import Logout from "../../assets/img/logout.svg";
import "./SideNavBar1.css";
import { Link } from 'react-router-dom';

const SideNavBar1 = () => {
  return (
    <div className="SideBar">
      <div className="bdulogo">
        <img src={bdulogo} alt="bdulogo" />
      </div>
      <div className="component_logo">
        <ul>
          <li>
            <div className="logobtn">
              <img src={Dashboard} alt="dashboard"></img>
            </div>
          </li>
          <li>
            <div className="logobtn">
              <img src={Result} alt="result"></img>
            </div>
          </li>
          <li>
            <div className="logobtn">
              <img src={AboutUs} alt="aboutus"></img>
            </div>
          </li>
          <li>
            <div className="logobtn">
              <Link to='/Student profile'>
                <img src={Account} alt="account"></img>
              </Link>
            </div>
          </li>
          <li>
            <div className="logobtn">
              <img src={Settings} alt="settings"></img>
            </div>
          </li>
        </ul>
      </div>
      <div className="logout_outline">
        <div className="logout_logo">
          <img src={Logout} alt="logout"></img>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar1;
