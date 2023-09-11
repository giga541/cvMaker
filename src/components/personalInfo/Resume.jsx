import { useContext } from "react";
import ResumeContext from "../../context/ResumeContext";
import Line from "../experience/Line";
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
  } = resumeData;

  return (
    <div className={classes.resume}>
      <img
        className={classes.img}
        src={profileImage}
        alt="userProfile"
        style={{ visibility: profileImage ? "visible" : "hidden" }}
      />
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{email}</p>
      <p className={classes["mobile-number"]}>{mobileNumber}</p>
      {aboutMe.length > 0 && (
        <span className={classes["about-me"]}>ჩემ შესახებ</span>
      )}
      <p>{aboutMe}</p>
      <p>{position}</p>
      <p>{employer}</p>
      <p>{startingDate}</p>
      <p>{finishingDate}</p>
      <p>{experienceDesc}</p>
      {/* <Line /> */}
    </div>
  );
}
export default Resume;
