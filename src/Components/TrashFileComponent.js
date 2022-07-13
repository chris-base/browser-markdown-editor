import { useRef, useEffect } from "react";
import "../Styles/TrashFileStyles.css";

const TrashFileComponent = ({ setTrashFileVisible, trashCanRef, setCurrFile }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target) && !trashCanRef.current.contains(event.target)) {
      setTrashFileVisible(false);
    }
  };

  return (
    <div id='trashFileComponent'>
      <div id='trashFileContainer' ref={wrapperRef}>
        <p id='trashFileTitleText'>Discard active file?</p>
        <div id='trashFileButtonsContainer'>
          <div
            className='trashFileButtonClass'
            id='trashFileButton'
            onClick={() => {
              setCurrFile(["null", "null"]);
              setTrashFileVisible(false);
            }}
          >
            Discard
          </div>
          <div
            className='trashFileButtonClass'
            id='trashFileCancelButton'
            onClick={() => {
              setTrashFileVisible(false);
            }}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrashFileComponent;
