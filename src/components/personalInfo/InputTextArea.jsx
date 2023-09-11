import classes from "./InputTexpArea.module.css";

function InputTextArea(props) {
  return (
    <div>
      <p className={classes["about-me"]}>{props.name}</p>
      <textarea
        placeholder={props.placeholder}
        value={props.value}
        name=""
        id=""
        rows="5"
        className={classes.txt}
        onChange={props.changeHandler}
      ></textarea>
    </div>
  );
}
export default InputTextArea;
