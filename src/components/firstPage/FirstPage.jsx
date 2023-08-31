import { useNavigate } from "react-router-dom";
import backgroundPicture from "../../images/unsplash.jpg";
import classes from "./FirstPage.module.css";

function FirstPage() {
  const navigate = useNavigate();
  const navigateToPersonalPage = () => {
    navigate("/personal-info");
  };
  return (
    <div className={classes["first-page"]}>
      <img
        className={classes.backgroundPicture}
        src={backgroundPicture}
        alt="backgroundPicture"
      />
      <button onClick={navigateToPersonalPage} className={classes.btn}>
        რეზიუმეს დამატება
      </button>
    </div>
  );
}

export default FirstPage;
