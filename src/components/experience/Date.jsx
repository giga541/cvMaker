import classes from "./Date.module.css";
function Date(props) {
  return (
    <div className={classes.date}>
      <div>{props.name}</div>
      <input className={classes.input} type="date" />
    </div>
  );
}
export default Date;
