import Header from "../personalInfo/Header";
import InputField from "../personalInfo/InputField";
import Resume from "../personalInfo/Resume";
import classes from "./EducationPage.module.css";
import Date from "../experience/Date";
import DropdownMenu from "./DropdownMenu";
import { useNavigate } from "react-router-dom";
import InputTextArea from "../personalInfo/InputTextArea";
import Line from "../experience/Line";
import ResumeContext from "../../context/ResumeContext";
import { useContext, useState } from "react";

function EducationPage() {
  const navigate = useNavigate();
  const navigateToExperiencePage = () => {
    navigate("/ExperiencePage");
  };
  const navigateToLastPage = () => {
    navigate("/LastPage");
  };

  const { resumeData, setResumeData } = useContext(ResumeContext);
  const { eduCentre, selectOption, eduFinishDate, educationCentreDesc } =
    resumeData;

  const eduCentreHandler = e => {
    setResumeData({ ...resumeData, eduCentre: e.target.value });
  };

  const selectOptionHandler = e => {
    setResumeData({ ...resumeData, selectOption: e });
  };

  const eduFinishHandler = e => {
    setResumeData({ ...resumeData, eduFinishDate: e.target.value });
  };

  const educationDescHandler = e => {
    setResumeData({ ...resumeData, educationCentreDesc: e.target.value });
  };

  const [isFinishButtonClicked, setFinishButtonClicked] = useState(false);
  const [eduCentreError, setEduCentreError] = useState("");
  const [selectOptionError, setSelectOptionError] = useState("");
  const [eduFinishError, setEduFinishError] = useState("");

  const handleButtonFinish = () => {
    setFinishButtonClicked(true);
    let isValid = true;

    // validate eduCentre
    if (resumeData.eduCentre.trim().length < 2) {
      setEduCentreError("მინიმუმ ორი სიმბოლო");
      isValid = false;
    } else {
      setEduCentreError("");
    }

    // validate selectOption
    if (!resumeData.selectOption) {
      setSelectOptionError("მიუთითეთ ხარისხი");
      isValid = false;
    } else {
      setSelectOptionError("");
    }

    // validate eduFinishDate
    if (!resumeData.eduFinishDate) {
      setEduFinishError("მიუთითეთ დასრულების თარიღი");
      isValid = false;
    } else {
      setEduFinishError("");
    }

    if (isValid) {
      navigateToLastPage();
    }
  };

  return (
    <div className={classes["education-page"]}>
      <div className={classes["form-side"]}>
        <Header headerName="განათლება" pageNumber="3/3" />
        <form className={classes.form}>
          <div className={classes.inputField}>
            <InputField
              value={eduCentre}
              changeHandler={eduCentreHandler}
              inputFieldHint="სასწავლებელი"
              hint={eduCentreError ? "" : "მინიმუმ ორი სიმბოლო"}
              className={eduCentreError ? classes["red-border"] : ""}
            />
            {isFinishButtonClicked && (
              <div className={classes["pos-error"]}>{eduCentreError}</div>
            )}
          </div>
          <div className={classes.style}>
            <div>
              <DropdownMenu
                changeHandler={selectOptionHandler}
                value={selectOption}
                className={
                  selectOptionError ? classes["dropdown-red-border"] : ""
                }
              />
              {isFinishButtonClicked && (
                <div className={classes["select-option-error"]}>
                  {selectOptionError}
                </div>
              )}
            </div>
            <div>
              <Date
                value={eduFinishDate}
                changeHandler={eduFinishHandler}
                name="დასრულების თარიღი"
                className={eduFinishError ? classes["red-border"] : ""}
              />
              {isFinishButtonClicked && (
                <div className={classes["edu-finish-error"]}>
                  {eduFinishError}
                </div>
              )}
            </div>
          </div>
          <InputTextArea
            value={educationCentreDesc}
            changeHandler={educationDescHandler}
            name="აღწერა"
            placeholder="განათლების აღწერა"
          />
          <Line />

          <div className={classes.buttons}>
            <button
              type="button"
              className={classes["btn-back"]}
              onClick={navigateToExperiencePage}
            >
              უკან
            </button>
            <button
              type="button"
              className={classes["btn-finish"]}
              onClick={handleButtonFinish}
            >
              დასრულება
            </button>
          </div>
        </form>
      </div>
      <div className={classes["resume-side"]}>
        <Resume />
      </div>
    </div>
  );
}
export default EducationPage;
