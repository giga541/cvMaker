import classes from "./InputField.module.css";

function InputField(props) {
  return (
    <div className={classes.InputField}>
      <label>{props.inputFieldHint}</label>
      <input value={props.value} type="text" onChange={props.changeHandler} />
      <span>{props.hint}</span>
    </div>
  );
}

export default InputField;
