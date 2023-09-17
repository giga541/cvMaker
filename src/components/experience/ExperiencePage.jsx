import classes from "./ExperiencePage.module.css";
import Header from "../personalInfo/Header";
import InputField from "../personalInfo/InputField";
import Date from "./Date";
import InputTextArea from "../personalInfo/InputTextArea";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import ResumeContext from "../../context/ResumeContext";
import Resume from "../personalInfo/Resume";
// import Line from "./Line";

function ExperiencePage() {
  const navigate = useNavigate();
  const navigateToPersonalInfo = () => {
    navigate("/Personal-info");
  };
  const navigateToEducationPage = () => {
    navigate("/EducationPage");
  };

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

  const [isNextClicked, setIsNextClicked] = useState(false);
  const [positionError, setPositionError] = useState("");
  const [employerError, setEmployerError] = useState("");
  const [startingDateError, setStartingDateError] = useState("");
  const [finishingDateError, setFinishingDateError] = useState("");

  const handleButtonNextClick = () => {
    setIsNextClicked(true);
    let isValid = true;

    // validate position
    if (resumeData.position.trim().length < 2) {
      setPositionError("მინიმუმ ორი სიმბოლო");
      isValid = false;
    } else {
      setPositionError("");
    }

    // validate employer
    if (resumeData.employer.trim().length < 2) {
      setEmployerError("მინიმუმ ორი სიმბოლო");
      isValid = false;
    } else {
      setEmployerError("");
    }

    // validate startingDate
    if (!resumeData.startingDate) {
      setStartingDateError("მიუთითეთ დაწყების თარიღი");
      isValid = false;
    } else {
      setStartingDateError("");
    }

    // validate finishingDate
    if (!resumeData.finishingDate) {
      setFinishingDateError("მიუთითეთ დასრულების თარიღი");
      isValid = false;
    } else {
      setFinishingDateError("");
    }

    if (isValid) {
      navigateToEducationPage();
    }
  };

  return (
    <div className={classes["experience-page"]}>
      <div className={classes["form-side"]}>
        <Header headerName="გამოცდილება" pageNumber="2/3" />
        <form className={classes.form}>
          <div className={classes.inputField}>
            <InputField
              value={position}
              changeHandler={posHandler}
              inputFieldHint="თანამდებობა"
              hint={positionError ? "" : "მინიმუმ ორი სიმბოლო"}
              className={positionError ? classes["red-border"] : ""}
            />
            {isNextClicked && (
              <div className={classes["pos-error"]}>{positionError}</div>
            )}
          </div>
          <div className={classes.employer}>
            <InputField
              value={employer}
              changeHandler={employerHandler}
              inputFieldHint="დამსაქმებელი"
              hint={employerError ? "" : "მინიმუმ ორი სიმბოლო"}
              className={employerError ? classes["red-border"] : ""}
            />
            {isNextClicked && (
              <div className={classes.error}>{employerError}</div>
            )}
          </div>
          <div className={classes.dates}>
            <div>
              <Date
                name="დაწყების თარიღი"
                value={startingDate}
                changeHandler={startingDateHandler}
                className={startingDateError ? classes["red-border"] : ""}
              />
              {isNextClicked && (
                <div className={classes.error}>{startingDateError}</div>
              )}
            </div>
            <div>
              <Date
                name="დასრულების თარიღი"
                value={finishingDate}
                changeHandler={finishingDateHandler}
                className={finishingDateError ? classes["red-border"] : ""}
              />
              {isNextClicked && (
                <div className={classes.error}>{finishingDateError}</div>
              )}
            </div>
          </div>
          <InputTextArea
            name="აღწერა"
            value={experienceDesc}
            changeHandler={experienceDescHandler}
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          />
          <div className={classes.line}></div>
          <button className={classes["add-btn"]}>
            მეტი გამოცდილების დამატება
          </button>
          <div className={classes.buttons}>
            <button
              type="button"
              className={classes["btn-next"]}
              onClick={handleButtonNextClick}
            >
              შემდეგი
            </button>
            <button
              type="button"
              className={classes["btn-back"]}
              onClick={navigateToPersonalInfo}
            >
              უკან
            </button>
          </div>
        </form>
      </div>
      <div className={classes["resume-side"]}>
        <Resume />
        {/* <Line /> */}
      </div>
    </div>
  );
}

export default ExperiencePage;
