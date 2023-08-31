import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ExperiencePage from "./components/experience/ExperiencePage";
import FirstPage from "./components/firstPage/FirstPage";
import PersonalInfo from "./components/personalInfo/PersonalInfo";
import { ResumeProvider } from "./context/ResumeContext";

function App() {
  return (
    <div className="App">
      <Router>
        <ResumeProvider>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/Personal-info" element={<PersonalInfo />} />
            <Route path="/ExperiencePage" element={<ExperiencePage />} />
          </Routes>
        </ResumeProvider>
      </Router>
    </div>
  );
}

export default App;
