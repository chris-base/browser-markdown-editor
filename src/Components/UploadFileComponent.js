import { useState, useRef, useEffect } from "react";
import "../Styles/UploadFileStyles.css";

const UploadFileComponent = ({ setUploadFileVisible, uploadButtonRef, setCurrFile }) => {
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

  const handleOnChangeFile = (e) => {
    const file = e.target.files[0];

    if (file.type === "text/markdown") {
      let reader = new FileReader();

      reader.readAsText(file);

      reader.onload = function () {
        setCurrFile([file.name, reader.result]);
      };

      reader.onerror = function () {
        console.log(reader.error);
      };

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

            <input type='file' id='uploadFileButton' accept='.md' onChange={handleOnChangeFile}></input>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFileComponent;
