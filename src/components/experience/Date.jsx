import classes from "./Date.module.css";
function Date(props) {
  return (
    <div className={classes.date}>
      <div>{props.name}</div>
      <input
        value={props.value}
        className={classes.input}
        type="date"
        onChange={props.changeHandler}
      />
    </div>
  );
}
export default Date;
