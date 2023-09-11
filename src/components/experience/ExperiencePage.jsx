import classes from "./ExperiencePage.module.css";
import Header from "../personalInfo/Header";
import InputField from "../personalInfo/InputField";
import Date from "./Date";
import InputTextArea from "../personalInfo/InputTextArea";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
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

  const posHandler = e => {
    setResumeData({ ...resumeData, position: e.target.value });
  };

  const employerHandler = e => {
    setResumeData({ ...resumeData, employer: e.target.value });
  };

  const startingDateHandler = e => {
    setResumeData({ ...resumeData, startingDate: e.target.value });
  };

  const finishingDateHandler = e => {
    setResumeData({ ...resumeData, finishingDate: e.target.value });
  };

  const experienceDescHandler = e => {
    setResumeData({ ...resumeData, experienceDesc: e.target.value });
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
              hint="მინიმუმ ორი სიმბოლო"
            />
          </div>
          <div className={classes.employer}>
            <InputField
              value={employer}
              changeHandler={employerHandler}
              inputFieldHint="დამსაქმებელი"
              hint="მინიმუმ ორი სიმბოლო"
            />
          </div>
          <div className={classes.dates}>
            <Date
              name="დაწყების თარიღი"
              value={startingDate}
              changeHandler={startingDateHandler}
            />

            <Date
              name="დასრულების თარიღი"
              value={finishingDate}
              changeHandler={finishingDateHandler}
            />
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
              onClick={navigateToEducationPage}
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
