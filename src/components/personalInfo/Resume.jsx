import { useContext } from "react";
import ResumeContext from "../../context/ResumeContext";
import classes from "./Resume.module.css";
import Line from "../experience/Line";

function Resume() {
  const { resumeData } = useContext(ResumeContext);
  const {
    firstName = "",
    lastName = "",
    aboutMe = "",
    email = "",
    mobileNumber = "",
    profileImage = "",
    position = "",
    employer = "",
    startingDate = "",
    finishingDate = "",
    experienceDesc = "",
    eduCentre = "",
    eduFinishDate = "",
    selectOption = "",
    educationCentreDesc = "",
  } = resumeData;

  return (
    <div className={classes.resume}>
      <img
        className={classes.img}
        src={profileImage}
        alt="userProfile"
        style={{ visibility: profileImage ? "visible" : "hidden" }}
      />
      <h2 className={classes["first-last-names"]}>
        {firstName} {lastName}
      </h2>
      <p>{email}</p>
      <p className={classes["mobile-number"]}>{mobileNumber}</p>
      {aboutMe.length > 0 && (
        <span className={classes["same-style"]}>ჩემ შესახებ</span>
      )}
      <p>{aboutMe}</p>
      <div>
        {(position.length > 0 ||
          employer.length > 0 ||
          startingDate.length > 0 ||
          finishingDate.length > 0) && (
          <>
            <Line />
            <span className={classes["same-style"]}>გამოცდილება</span>
          </>
        )}
        <p>{position}</p>
        <p>{employer}</p>
        <div className={classes.dates}>
          <p className={classes["starting-date"]}>{startingDate}</p>
          <p>{finishingDate}</p>
        </div>
        <p>{experienceDesc}</p>
      </div>
      <div>
        {(eduCentre.length > 0 ||
          eduFinishDate.length > 0 ||
          selectOption.length > 0 ||
          educationCentreDesc.length > 0) && (
          <>
            <Line />
            <span className={classes["same-style"]}>განათლება</span>
          </>
        )}
        <p>{eduCentre}</p>
        <p className={classes["edu-finish-date"]}>{eduFinishDate}</p>
        <p> {selectOption}</p>
        <p> {educationCentreDesc}</p>
      </div>
    </div>
  );
}
export default Resume;
