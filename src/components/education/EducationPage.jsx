import Header from "../personalInfo/Header";
import InputField from "../personalInfo/InputField";
import Resume from "../personalInfo/Resume";
import classes from "./EducationPage.module.css";
import Date from "../experience/Date";
import DropdownMenu from "./DropdownMenu";
import { useNavigate } from "react-router-dom";

function EducationPage() {
  const navigate = useNavigate();
  const navigateToExperiencePage = () => {
    navigate("/ExperiencePage");
  };

  return (
    <div className={classes["experience-page"]}>
      <div className={classes["form-side"]}>
        <Header headerName="განათლება" pageNumber="3/3" />
        <form className={classes.form}>
          <div className={classes.inputField}>
            <InputField
              inputFieldHint="სასწავლებელი"
              hint="მინიმუმ ორი სიმბოლო"
            />
          </div>
          <div className={classes.style}>
            <DropdownMenu />
            <Date className={classes.date} name="დამთავრების თარიღი" />
          </div>
        </form>
        <div className={classes["resume-side"]}>
          <Resume />
        </div>
        <div>
          <button
            className={classes["btn-back"]}
            onClick={navigateToExperiencePage}
          >
            უკან
          </button>
          <button className={classes["btn-finish"]}>დასრულება</button>
        </div>
      </div>
    </div>
  );
}
export default EducationPage;
