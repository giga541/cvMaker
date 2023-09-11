import { useContext } from "react";
import ResumeContext from "../../context/ResumeContext";
import classes from "./Resume.module.css";

function Resume() {
  const { resumeData } = useContext(ResumeContext);
  const {
    firstName,
    lastName,
    aboutMe,
    email,
    mobileNumber,
    profileImage,
    position,
    employer,
    startingDate,
    finishingDate,
    experienceDesc,
    eduCentre,
    eduFinishDate,
    educationCentreDesc,
    selectOption,
  } = resumeData;

  return (
    <div className={classes.resume}>
      <img
        className={classes.img}
        src={profileImage}
        alt="userProfile"
        style={{ visibility: profileImage ? "visible" : "hidden" }}
      />
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{email}</p>
      <p className={classes["mobile-number"]}>{mobileNumber}</p>
      {aboutMe.length > 0 && (
        <span className={classes["about-me"]}>ჩემ შესახებ</span>
      )}
      <p>{aboutMe}</p>
      <p>{position}</p>
      <p>{employer}</p>
      <div className={classes.dates}>
        <p className={classes["starting-date"]}>{startingDate}</p>
        <p>{finishingDate}</p>
      </div>
      <p>{experienceDesc}</p>
      <p>{eduCentre}</p>
      <p className={classes["edu-finish-date"]}>{eduFinishDate}</p>
      <p> {educationCentreDesc}</p>
      <p> {selectOption}</p>
      {/* <Line /> */}
    </div>
  );
}
export default Resume;
