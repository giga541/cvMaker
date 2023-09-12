import classes from "./InputField.module.css";

function InputField(props) {
  return (
    <div className={classes.InputField}>
      <label>{props.inputFieldHint}</label>
      <input
        value={props.value}
        type={props.type}
        onChange={props.changeHandler}
        className={props.className}
      />
      <span>{props.hint}</span>
    </div>
  );
}

export default InputField;
