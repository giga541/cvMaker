import { useContext } from "react";
import { useRef } from "react";
import ResumeContext from "../../context/ResumeContext";
import classes from "./FileUploader.module.css";

function FileUploader() {
  const hiddenFileInput = useRef(null);
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    convertToBase64(event.target.files[0]);
  };

  const convertToBase64 = file => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result;

      setResumeData({ ...resumeData, profileImage: base64 });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <button
        type="button"
        className={classes["button-upload"]}
        onClick={handleClick}
      >
        ატვირთვა
      </button>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default FileUploader;
