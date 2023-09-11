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
import { useContext } from "react";

function EducationPage() {
  const navigate = useNavigate();
  const navigateToExperiencePage = () => {
    navigate("/ExperiencePage");
  };

  const { resumeData, setResumeData } = useContext(ResumeContext);
  const { eduCentre, eduFinishDate, educationCentreDesc } = resumeData;

  const eduCentreHandler = e => {
    setResumeData({ ...resumeData, eduCentre: e.target.value });
  };

  const eduFinishHandler = e => {
    setResumeData({ ...resumeData, eduFinishDate: e.target.value });
  };

  const educationDescHandler = e => {
    setResumeData({ ...resumeData, educationCentreDesc: e.target.value });
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
              hint="მინიმუმ ორი სიმბოლო"
            />
          </div>
          <div className={classes.style}>
            <div>
              <DropdownMenu />
            </div>
            <div>
              <Date
                value={eduFinishDate}
                changeHandler={eduFinishHandler}
                className={classes.date}
                name="დასრულების თარიღი"
              />
            </div>
          </div>
          <InputTextArea
            value={educationCentreDesc}
            changeHandler={educationDescHandler}
            name="აღწერა"
            placeholder="განათლების აღწერა"
          />
          <Line />
          <button className={classes["add-new-edu"]}>
            სხვა სასწავლებლის დამატება
          </button>
          <div className={classes.buttons}>
            <button
              type="button"
              className={classes["btn-back"]}
              onClick={navigateToExperiencePage}
            >
              უკან
            </button>
            <button type="button" className={classes["btn-finish"]}>
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
