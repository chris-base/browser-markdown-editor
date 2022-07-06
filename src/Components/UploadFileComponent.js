import { useState, useRef, useEffect } from "react";
import "../Styles/UploadFileStyles.css";

const UploadFileComponent = ({ setUploadFileVisible, uploadButtonRef }) => {
  const [isMD, setIsMD] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target) && !uploadButtonRef.current.contains(event.target)) {
      setUploadFileVisible(false);
    }
  };

  const handleOnChangeFile = (file) => {
    if (file.target.files[0].type === "text/markdown") {
      setIsMD(true);
    }
  };

  return (
    <div id='uploadFileComponent'>
      <div id='uploadFileContainer' ref={wrapperRef}>
        {isMD ? (
          <div className='loading-spinner'></div>
        ) : (
          <div>
            <p id='uploadFileTitleText'>Upload file (.md files only)</p>

            <input type='file' id='uploadFileButton' onChange={handleOnChangeFile}></input>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFileComponent;
