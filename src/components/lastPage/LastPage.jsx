import React from "react";
import Resume from "../personalInfo/Resume";
import classes from "./LastPage.module.css";

function LastPage() {
  return (
    <div className={classes["last-page"]}>
      <Resume />
    </div>
  );
}

export default LastPage;
