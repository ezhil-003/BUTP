import React from "react";
import bdulogo from '../../assets/img/bdulogo.png';
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="Wrapper">
      <div className="top-container">
        <div className="emblem">
          <div className="imgblock">
            <img src={bdulogo} alt="bdulogo"></img>
          </div>
          <div className="title">
            <label className="title1">
              School of Computer Science, Engineering and Application
            </label>
            <label className="title2">
              Bharathidasan University, Tiruchirappalli - 620023
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
