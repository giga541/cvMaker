import React, { createContext, useState, useEffect } from "react";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(() => {
    const data = JSON.parse(localStorage.getItem("resumeData"));
    const defaultState = {
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
      selectOption: "",
    };
    return data || defaultState;
  });

  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}

export default ResumeContext;
