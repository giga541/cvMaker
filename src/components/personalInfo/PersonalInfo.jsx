import classes from "./PersonalInfo.module.css";
import Header from "./Header";
import InputField from "./InputField";
import FileUploader from "./FileUploader";
import { useContext } from "react";
import ResumeContext from "../../context/ResumeContext";
import Resume from "./Resume";
import { useNavigate } from "react-router-dom";
import AboutMe from "./AboutMe";

function PersonalInfo() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const { firstName, lastName, email, mobileNumber } = resumeData;

  const firstNameHandler = e => {
    setResumeData({ ...resumeData, firstName: e.target.value });
  };

  const lastNameHandler = e => {
    setResumeData({ ...resumeData, lastName: e.target.value });
  };

  const emailHandler = e => {
    setResumeData({ ...resumeData, email: e.target.value });
  };

  const mobileNumberHandler = e => {
    setResumeData({ ...resumeData, mobileNumber: e.target.value });
  };

  const navigate = useNavigate();
  const navigateToFirstPage = () => {
    navigate("/");
  };
  const navigateToExperiencePage = () => {
    navigate("/ExperiencePage");
  };

  return (
    <div className={classes.PersonalInfo}>
      <div className={classes["form-side"]}>
        <Header headerName="პირადი ინფო" pageNumber="1/3" />
        <form className={classes.form}>
          <div className={classes.inputField}>
            <InputField
              value={firstName}
              changeHandler={firstNameHandler}
              inputFieldHint="სახელი"
              hint="მინიმუმ ორი ასო, ქართული ასოები"
            />
            <InputField
              value={lastName}
              changeHandler={lastNameHandler}
              inputFieldHint="გვარი"
              hint="მინიმუმ ორი ასო, ქართული ასოები"
            />
          </div>
          <div className={classes.btn}>
            <p className={classes.photoUpload}>პირადი ფოტოს ატვირთვა</p>
            <FileUploader />
          </div>
          <AboutMe aboutMe="ჩემ შესახებ(არასავალდებულო)" />
          <div className={classes["email-wrapper"]}>
            <InputField
              inputFieldHint="ელ.ფოსტა"
              changeHandler={emailHandler}
              value={email}
            />
          </div>
          <div className={classes["mobile-number-wrapper"]}>
            <InputField
              value={mobileNumber}
              inputFieldHint="მობილურის ნომერი"
              hint="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
              changeHandler={mobileNumberHandler}
            />
          </div>
          <button
            className={classes["btn-next"]}
            onClick={navigateToExperiencePage}
          >
            შემდეგი
          </button>
          <button className={classes["btn-back"]} onClick={navigateToFirstPage}>
            უკან
          </button>
        </form>
      </div>
      <div className={classes["resume-side"]}>
        <Resume />
      </div>
    </div>
  );
}

export default PersonalInfo;