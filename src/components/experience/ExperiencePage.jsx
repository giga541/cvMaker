import classes from "./ExperiencePage.module.css";
import Header from "../personalInfo/Header";
import InputField from "../personalInfo/InputField";
import Date from "./Date";

function ExperiencePage() {
  return (
    <div className={classes["form-side"]}>
      <Header headerName="გამოცდილება" pageNumber="2/3" />
      <form className={classes.form}>
        <div className={classes.inputField}>
          <InputField inputFieldHint="თანამდებობა" hint="მინიმუმ ორი სიმბოლო" />
        </div>
        <div className={classes.employer}>
          <InputField
            inputFieldHint="დამსაქმებელი"
            hint="მინიმუმ ორი სიმბოლო"
          />
        </div>
        <div className={classes.dates}>
          <Date name="დაწყების თარიღი" />
          <Date name="დამთავრების თარიღი" />
        </div>
      </form>
    </div>
  );
}

export default ExperiencePage;
