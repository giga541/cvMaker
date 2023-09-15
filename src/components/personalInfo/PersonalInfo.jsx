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

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [isNextClicked, setIsNextClicked] = useState(false);

  const handleNextButtonClick = () => {
    setIsNextClicked(true);
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const georgianMobileNumPattern = /^5[0-9]{8}$/;

    let isValid = true;

    // Validate first name
    if (
      resumeData.firstName.trim().length < 2 ||
      !resumeData.firstName.match(/^[ა-ჰ]+$/)
    ) {
      setFirstNameError("მინიმუმ ორი ასო, ქართული ასოები");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    // Validate last name
    if (
      resumeData.lastName.trim().length < 2 ||
      !resumeData.lastName.match(/^[ა-ჰ]+$/)
    ) {
      setLastNameError("მინიმუმ ორი ასო, ქართული ასოები");
      isValid = false;
    } else {
      setLastNameError("");
    }

    // Validate email
    if (!emailPattern.test(resumeData.email)) {
      setEmailError("სწორად ჩაწერეთ ელ.ფოსტა");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate mobile number
    if (!georgianMobileNumPattern.test(resumeData.mobileNumber)) {
      setMobileNumberError(
        "სწორად ჩაწერეთ ქართული მობილურის ნომერი (მაგ: 591234567)"
      );
      isValid = false;
    } else {
      setMobileNumberError("");
    }

    if (isValid) {
      navigateToExperiencePage();
    }
  };

  return (
    <div className={classes.PersonalInfo}>
      <div className={classes["form-side"]}>
        <Header headerName="პირადი ინფო" pageNumber="1/3" />
        <form className={classes.form}>
          <div className={classes.inputField}>
            <div>
              <InputField
                value={firstName}
                changeHandler={firstNameHandler}
                inputFieldHint="სახელი"
                hint={firstNameError ? "" : "მინიმუმ ორი ასო, ქართული ასოები"}
                className={firstNameError ? classes["red-border"] : ""}
              />
              {isNextClicked && (
                <div className={classes.error}>{firstNameError}</div>
              )}
            </div>
            <div>
              <InputField
                value={lastName}
                changeHandler={lastNameHandler}
                inputFieldHint="გვარი"
                hint={lastNameError ? "" : "მინიმუმ ორი ასო, ქართული ასოები"}
                className={lastNameError ? classes["red-border"] : ""}
              />
              {isNextClicked && (
                <div className={classes.error}>{lastNameError}</div>
              )}
            </div>
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
              className={emailError ? classes["red-border"] : ""}
            />
            {isNextClicked && <div className={classes.error}>{emailError}</div>}
          </div>
          <div className={classes["mobile-number-wrapper"]}>
            <InputField
              value={mobileNumber}
              changeHandler={mobileNumberHandler}
              inputFieldHint="მობილურის ნომერი"
              hint={
                mobileNumberError
                  ? ""
                  : "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს (მაგ: 591234567)"
              }
              className={mobileNumberError ? classes["red-border"] : ""}
            />
            {isNextClicked && (
              <div className={classes.error}>{mobileNumberError}</div>
            )}
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
