import classes from "./Header.module.css";
import backArrowIcon from "../../images/back-arrow.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ResumeContext from "../../context/ResumeContext";

function Header(props) {
  const navigate = useNavigate();
  const { setResumeData } = useContext(ResumeContext);

  const navigateToFirstPage = () => {
    setResumeData({
      firstName: "",
      lastName: "",
      aboutMe: "",
      email: "",
      mobileNumber: "",
      profileImage: null,
      position: "",
      employer: "",
      startingDate: "",
      finishingDate: "",
      experienceDesc: "",
      eduCentre: "",
      eduFinishDate: "",
      educationCentreDesc: "",
      selectOption: "",
    });
    navigate("/");
  };
  return (
    <div className={classes.Header}>
      <button onClick={navigateToFirstPage} className={classes["back-btn"]}>
        <img
          className={classes["back-btn-icon"]}
          src={backArrowIcon}
          alt="back-btn-icon"
        />
      </button>
      <header className={classes["page-header"]}>
        <div className={classes["page-header-info"]}>
          <h1>{props.headerName}</h1>
          <h2>{props.pageNumber}</h2>
        </div>
        <div className={classes.line}></div>
      </header>
    </div>
  );
}

export default Header;
