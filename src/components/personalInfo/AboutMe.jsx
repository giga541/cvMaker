import { useContext } from "react";
import ResumeContext from "../../context/ResumeContext";
import classes from "./PersonalInfo.module.css";

function AboutMe(props) {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const { aboutMe } = resumeData;
  const aboutMeHandler = e => {
    setResumeData({ ...resumeData, aboutMe: e.target.value });
  };

  return (
    <div>
      <p className={classes["about-me"]}>{props.aboutMe}</p>
      <textarea
        value={aboutMe}
        name=""
        id=""
        rows="5"
        className={classes.txt}
        onChange={aboutMeHandler}
      ></textarea>
    </div>
  );
}
export default AboutMe;
