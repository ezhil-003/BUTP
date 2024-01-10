import StudentSignin from "./pages/StudentLogin/StudentLogin.jsx"
import StudentSignup from "./pages/StudentRegister/StudentSignup.jsx";
import FacultySignin from "./pages/FacultySignin/FacultySignin.jsx";
import AboutPage from "../src/pages/AboutPage/AboutPage.jsx";
import HelpPage from "../src/pages/HelpPage/HelpPage.jsx";
import { AdminSignin } from "../src/pages/AdminSignin/AdminSignin.jsx";
import SupportPage from "../src/pages/SupportPage/SupportPage.jsx";
import FacultySignup from "../src/pages/FacultySignup/FacultySignup.jsx";
import StudentDashBorad from "../src/pages/StudentDashboard/StudentDashBoard.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentResult from "../src/pages/StudentResult/StudentResult.jsx";
import Studentprofile from "./pages/Studentprofile/Studentprofile.jsx";
import COESubjects from "./pages/COESubjectpage/COESubjects.jsx";
import COEDash from "./pages/COEDash/COEDash.jsx";
import COEResults from "./pages/COEResults/COEResults.jsx";
import COEResultview from "./pages/COEResultView/COEResultView.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<StudentSignin />} />
        <Route path="/Student Register" exact element={<StudentSignup />} />
        <Route path="/Faculty Login" element={<FacultySignin />} />
        <Route path="/Faculty Register" element={<FacultySignup />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Help" element={<HelpPage />} />
        <Route path="/Support" element={<SupportPage />} />
        <Route path="/Student Result" element={<StudentResult />} />
        <Route path="/Student Dashboard" element={<StudentDashBorad />} />
        <Route path="/Student profile" element={<Studentprofile />} />
        <Route path="/Admin Login" element={<AdminSignin />} />
        <Route path="/COEDashboard" element={<COEDash />} />
        <Route path="/COE Subjects" element={<COESubjects />} />
        <Route path="/COE Results" element={<COEResults />} />
        <Route path="/COE Results View" element={<COEResultview />} />
      </Routes>
    </Router>
  );
}


export default App;
