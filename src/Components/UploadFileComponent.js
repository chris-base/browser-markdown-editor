import { useRef, useEffect } from "react";
import "../Styles/UploadFileStyles.css";
import uploadFileIcon from "./assets/uploadFileIcon.png";

const UploadFileComponent = ({ uploadFileVisible, setUploadFileVisible }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setUploadFileVisible(false);
    }
  };

  return (
    <div id='uploadFileComponent'>
      <div id='uploadFileContainer' ref={wrapperRef}>
        <p id='uploadFileTitleText'>Upload file (.md files only)</p>
        <div id='uploadFileButton'>
          <div id='uploadFileImg' style={{ backgroundImage: "url(" + uploadFileIcon + ")" }}></div>
          <p id='uploadFileText'>Upload</p>
        </div>
      </div>
    </div>
  );
};

export default UploadFileComponent;
