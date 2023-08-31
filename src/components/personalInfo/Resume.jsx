import { useContext } from "react";
import ResumeContext from "../../context/ResumeContext";
import classes from "./Resume.module.css";

function Resume() {
  const { resumeData } = useContext(ResumeContext);
  const { firstName, lastName, aboutMe, email, mobileNumber, profileImage } =
    resumeData;

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
      <p>{aboutMe}</p>
      <p>{email}</p>
      <p>{mobileNumber}</p>
    </div>
  );
}
export default Resume;
