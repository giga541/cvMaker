import classes from "./PersonalInfo.module.css";
import Header from "./Header";
import InputField from "./InputField";
import FileUploader from "./FileUploader";
import ResumeContext from "../../context/ResumeContext";
import Resume from "./Resume";
import InputTextArea from "./InputTextArea";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function PersonalInfo() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const { firstName, lastName, email, mobileNumber, aboutMe } = resumeData;

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

  const aboutMeHandler = e => {
    setResumeData({ ...resumeData, aboutMe: e.target.value });
  };

  const navigate = useNavigate();
  const navigateToExperiencePage = () => {
    navigate("/ExperiencePage");
  };

  const [firstAndLastNameError, setfirstAndLastNameError] = useState("");
  const [isNextClicked, setIsNextClicked] = useState(false);

  const handleNextButtonClick = () => {
    setIsNextClicked(true);
    const email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const georgianMobileNum = /^5[0-9]{8}$/;

    if (
      resumeData.firstName.trim().length < 2 ||
      resumeData.lastName.trim().length < 2 ||
      !resumeData.firstName.match(/^[ა-ჰ]+$/) ||
      !resumeData.lastName.match(/^[ა-ჰ]+$/) ||
      !email.test(resumeData.email) ||
      !georgianMobileNum.test(resumeData.mobileNumber)
    ) {
      setfirstAndLastNameError("მინიმუმ ორი ასო, ქართული ასოები");
    } else {
      setfirstAndLastNameError("");
      navigateToExperiencePage();
    }
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
              hint={
                firstAndLastNameError ? "" : "მინიმუმ ორი ასო, ქართული ასოები"
              }
              className={firstAndLastNameError ? classes["red-border"] : ""}
            />
            <InputField
              value={lastName}
              changeHandler={lastNameHandler}
              inputFieldHint="გვარი"
              hint={
                firstAndLastNameError ? "" : "მინიმუმ ორი ასო, ქართული ასოები"
              }
              className={firstAndLastNameError ? classes["red-border"] : ""}
            />
            {isNextClicked && (
              <div className={classes.error}>{firstAndLastNameError}</div>
            )}
          </div>
          <div className={classes.btn}>
            <p className={classes.photoUpload}>პირადი ფოტოს ატვირთვა</p>
            <FileUploader />
          </div>
          <InputTextArea
            value={aboutMe}
            name="ჩემ შესახებ(არასავალდებულო)"
            changeHandler={aboutMeHandler}
            placeholder="ზოგადი ინფორმაცია თქცენ შესახებ"
          />
          <div className={classes["email-wrapper"]}>
            <InputField
              inputFieldHint="ელ.ფოსტა"
              changeHandler={emailHandler}
              value={email}
              type={email}
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
          <div className={classes["btn-style"]}>
            <button
              type="button"
              className={classes["btn-next"]}
              onClick={handleNextButtonClick}
            >
              შემდეგი
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

export default PersonalInfo;
