import React from "react";
import "./COESubject.css";
import SideNavBar1 from "../../components/COESidebar1/COESidebar1.jsx";
import Notification from "../../assets/img/Notification_icon-1.svg";

const COESubjects = () => {
  return (
    <div className="subspace1">
      <SideNavBar1 />
      <div className="result">
        <nav className="notification-icon">
          <div className="notifi-no">
            <img src={Notification} className="notifications" alt="BDU-logo" />
            <span className="staffname">Sumathy</span>
          </div>
        </nav>
        <div className="rectangle-19">
          <div className="from-wrap">
            <form>
              <div className="view-subject">
                <label>View Subject</label>
              </div>
              <br />
              <br />
              <div className="input-container3">
                <input
                  className="input-box"
                  type=""
                  id="name"
                  name="subname"
                  required
                />
                <label className="input-label" for="subjectname">
                  Subject Name
                </label>
                <div className="input-container3">
                  <input
                    className="input-box"
                    type="text"
                    id="subcode"
                    name="subcode"
                    required
                  />
                  <label className="input-label" for="subcode">
                    Subject Code
                  </label>
                  <div className="input-container3">
                    <div className="input-container3">
                      <select
                        className="input-box"
                        id="batch"
                        name="batch"
                        required
                      >
                        <option value=""> </option>
                        <option value="">2020</option>
                        <option value="">2021</option>
                      </select>
                      <label className="input-label" for="city">
                        Batch{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />

              <div className="input-container1">
                <input
                  className="input-box"
                  type="text"
                  id="credits"
                  name="credits"
                  required
                />
                <label className="input-label" for="credits">
                  credits
                </label>
                <div className="input-container2">
                  <input
                    className="input-box"
                    type="text"
                    id="syllabusreg"
                    name="syllabusregulation"
                    required
                  />
                  <label className="input-label" for="syllabusregulation">
                    {" "}
                    Syllabus Regulation{" "}
                  </label>
                  <div className="input-container2">
                    <input
                      className="input-box"
                      type="text"
                      id="subjecttype"
                      name="subjecttype"
                      required
                    />
                    <label className="input-label" for="subjecttype">
                      Subject Type
                    </label>
                    <div className="input-container2">
                      <select
                        className="input-box"
                        id="semester"
                        name="Semester"
                        required
                      >
                        <option value=""> </option>
                        <option value="">1</option>
                        <option value="">2</option>
                      </select>
                      <label className="input-label" for="semester">
                        Semester
                      </label>
                    </div>
                  </div>
                </div>
                <div className="containerbutton">
                  <button
                    type="submit"
                    className="button"
                    onclick="open-Popup()"
                  >
                    View
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default COESubjects;
