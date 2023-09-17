import React, { useContext } from "react";
import classes from "./AdditionalExperience.module.css";
import InputField from "../personalInfo/InputField";
import Date from "./Date";
import InputTextArea from "../personalInfo/InputTextArea";
import ResumeContext from "../../context/ResumeContext";

function AdditionalExperience() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const { position, employer, startingDate, finishingDate, experienceDesc } =
    resumeData;

  const posHandler = (e) => {
    setResumeData({ ...resumeData, position: e.target.value });
  };

  const employerHandler = (e) => {
    setResumeData({ ...resumeData, employer: e.target.value });
  };

  const startingDateHandler = (e) => {
    setResumeData({ ...resumeData, startingDate: e.target.value });
  };

  const finishingDateHandler = (e) => {
    setResumeData({ ...resumeData, finishingDate: e.target.value });
  };

  const experienceDescHandler = (e) => {
    setResumeData({ ...resumeData, experienceDesc: e.target.value });
  };

  return (
    <div className={classes.additionalExperience}>
      <form className={classes.form}>
        <div className={classes.inputField}>
          <InputField
            value={position}
            changeHandler={posHandler}
            inputFieldHint="თანამდებობა"
          />
        </div>
        <div className={classes.employer}>
          <InputField
            value={employer}
            changeHandler={employerHandler}
            inputFieldHint="დამსაქმებელი"
          />
        </div>
        <div className={classes.dates}>
          <div>
            <Date
              name="დაწყების თარიღი"
              value={startingDate}
              changeHandler={startingDateHandler}
            />
          </div>
          <div>
            <Date
              name="დასრულების თარიღი"
              value={finishingDate}
              changeHandler={finishingDateHandler}
            />
          </div>
        </div>
        <InputTextArea
          name="აღწერა"
          value={experienceDesc}
          changeHandler={experienceDescHandler}
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        />
      </form>
    </div>
  );
}

export default AdditionalExperience;
