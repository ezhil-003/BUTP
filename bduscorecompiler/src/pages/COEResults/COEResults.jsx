import React from "react";
import "./COEResults.css";
import COESidebar1 from "../../components/COESidebar1/COESidebar1.jsx";
import { useState, useEffect } from "react";

const COEResults = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [batches, setBatches] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const handleProgramChange = async (event) => {
    const selectedProgram = event.target.value;
    setSelectedProgram(selectedProgram);
    console.log("Program changed:", selectedProgram);
    console.log("Fetching batches...");

    // Fetch batches based on the selected program
    try {
      const batchResponse = await fetch(`/api/batches`); // Fetch all batches
      const batchesData = await batchResponse.json();
      setBatches(batchesData.availableBatches); // Access the correct property
      console.log("Fetched batches:", batchesData);
    } catch (error) {
      console.error("Error fetching batches:", error);
      // Handle error appropriately (e.g., display an error message)
    }
  };

  const handleBatchChange = async (event) => {
    const selectedBatch = event.target.value;
    setSelectedBatch(selectedBatch);

    // Fetch semesters based on the selected batch
    try {
      const semesterResponse = await fetch(`/api/semesters/${selectedBatch}`);
      const semesterData = await semesterResponse.json();
      setSemesters(semesterData.availableSemesters); // Access the correct property
    } catch (error) {
      console.error("Error fetching semesters:", error);
      // Handle error appropriately
    }
  };

  const handleSemesterChange = async (event) => {
    const selectedSemester = event.target.value;
    setSelectedSemester(selectedSemester);

    // Fetch subjects based on the selected semester and batch
    try {
      const subjectResponse = await fetch(
        `/api/subjects/${selectedBatch}/${selectedSemester}`
      );
      const subjectData = await subjectResponse.json();
      setSubjects(subjectData.subjects || []); // Use the correct property, and handle undefined
      console.log('Received Subject Data:', subjectData);
    } catch (error) {
      console.error("Error fetching subjects:", error);
      // Handle error appropriately
    }
  };

  const handleSubjectChange = (event) => {
    const selectedSubject = event.target.value;
    setSelectedSubject(selectedSubject);
    console.log("Subject changed:", selectedSubject);
  };

  return (
    <div className="resspace1">
      <COESidebar1 />
      <div className="coe_content_wrapper">
        <div className="resultfinder1">
          <div className="res_marks_label">
            <label>Marks</label>
          </div>
          <div className="res_input_box1">
            <form method="post">
              <div className="res_box_wrapper">
                <label className="res_input_label4">Programme</label>
                <select
                  className="res_input_tag"
                  onChange={handleProgramChange}
                  required
                >
                  <option value=""></option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="MCA">MCA</option>
                  <option value="M.Sc(CS)">M.Sc(CS)</option>
                  <option value="M.Sc(DS)">M.Sc(DS)</option>
                  <option value="M.Sc(AI)">M.Sc(AI)</option>
                </select>
              </div>
              <div className="res_box_wrapper">
                <label className="res_input_label1">Batch</label>
                <select
                  className="res_input_tag"
                  onChange={handleBatchChange}
                  required
                >
                  <option value=""> </option>
                  {batches.map((batch) => (
                    <option key={batch} value={batch}>
                      {batch}
                    </option>
                  ))}
                </select>
              </div>

              <div className="res_box_wrapper">
                <label className="res_input_label3">Semester</label>
                <select
                  className="res_input_tag"
                  onChange={handleSemesterChange}
                  required
                >
                  <option value=""> </option>
                  {semesters &&
                    semesters.map((semester) => (
                      <option key={semester} value={semester}>
                        {semester}
                      </option>
                    ))}
                </select>
              </div>
              <div className="res_box_wrapper">
                <label className="res_input_label2">Subject</label>
                <select
                  className="res_input_tag"
                  onChange={handleSubjectChange}
                  required
                >
                  <option value=""> </option>
                  {subjects && subjects.map((subject, index) => (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              <div className="res_box">
                <button type="submit" className="res_btn" >Edit</button>
              </div>
            </form>
          </div>

        </div>
        <div className="resultfinder2">
          <div className="res_marks_label">
            <label className="">Consolidate Marks</label>
          </div>
          <div className="res_input_box2">
            <div className="res_box_wrapper">
              <label className="res_input_label5">Programme</label>
              <select className="res_input_tag" required>
                <option value=""> </option>
                <option value="M.Tech">M.Tech</option>
                <option value="MCA">MCA</option>
                <option value="">M.Sc(CS)</option>
              </select>
            </div>
            <div className="res_box_wrapper">
              <label className="res_input_label1">Batch</label>
              <select className="res_input_tag" required>
                <option value=""> </option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div className="res_box_wrapper">
              <label className="res_input_label3">Semester</label>
              <select className="res_input_tag" placeholder="Semester" required>
                <option value=""> </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="res_box">
            <button type="submit" className="res_btn" >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default COEResults;
