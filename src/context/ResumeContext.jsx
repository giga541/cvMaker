import React, { createContext, useState } from "react";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState({
    firstName: "",
    lastName: "",
    aboutMe: "",
    email: "",
    mobileNumber: "",
    profileImage: null,
    position: "",
    employer: "",
    startingDate: "",
    finishingDate: "",
    experienceDesc: "",
    eduCentre: "",
    eduFinishDate: "",
    educationCentreDesc: "",
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}

export default ResumeContext;
