import React from "react";
import SideNavBar1 from "../../components/SideNavBar1/SideNavBar1";
import ProfilePicture from "../../assets/img/Ellipse 3.png";
import "./StudentResult.css";
import Python_logo from "../../assets/img/python logo.svg";
import { useState, useEffect } from "react";

const StudentResult = () => {
  const localData = JSON.parse(localStorage.getItem('userData'));
  const rollNo = localData.userId;
  const [marks, setMarks] = useState({
    id:null,
    internal: null,
    external: null,
    total: null,
  });

  const fetchMarks = async () => {
    try {
      const response = await fetch(`http://localhost:5000/StudentResult/${rollNo}`);
      console.log(response);

      const data = await response.json();
      setMarks({
        id:data.id,
        internal: data.internalMarks,
        external: data.externalMarks,
        total: data.totalMarks,
      });
    } catch (error) {
      console.error(error);
      alert("Error fetching marks");
    }
  };

  useEffect(() => {
    fetchMarks();
  }, []);

  return (
    <>
      <div className="Wrapper1">
        <SideNavBar1 />
        <div className="container">
          <div className="profilebar">
            <div className="profile">
              <div className="profileimg">
                <img src={ProfilePicture} alt="profile" />
              </div>
              {marks.id && (<span>{marks.id}</span>)}
            </div>
          </div>
          <div className="resultblock">
            <div className="python_result">
              <div className="pythoncontent">
                <img src={Python_logo}></img>
                <span>Python Programming</span>
                <span className="span2">20MTCS048</span>
              </div>
              <br />
              <br />
              <div className="pythonresultpage">
                <span>Marks Obtained</span>
                {marks.internal && (
                  <span>Internal Marks : {marks.internal}</span>
                )}
                {marks.external && (
                  <span>External Marks : {marks.external}</span>
                )}
                {marks.total && <span>Total Marks : {marks.total}</span>}
              </div>
            </div>
            <div className="python_info">
              <div className="pythoninfoBlock">
                <span className="sp1">Subject Type</span>
                <span className="sp2">Theory</span>
                <span className="sp1">Batch</span>
                <span className="sp2">2020</span>
                <span className="sp1">Semester</span>
                <span className="sp2">5th Sem</span>
                <span className="sp1">Regulation</span>
                <span className="sp2">2020</span>
                <span className="sp1">Credits</span>
                <span className="sp2">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentResult;
