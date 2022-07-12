import { useState, useEffect } from "react";
import "../Styles/EditFileStyles.css";

const EditFileComponent = ({ fileName, currFile, setCurrFile }) => {
  const [editFileText, setEditFileText] = useState(currFile);

  useEffect(() => {
    setEditFileText(currFile);
  }, [currFile]);

  return (
    <div id='editFileContainer'>
      <div id='editFileHeader'>
        <p id='editFileHeaderText'>MARKDOWN</p>
      </div>
      <textarea
        id='editFileTextArea'
        type='text'
        onChange={(e) => {
          setEditFileText(e.target.value);
          setCurrFile([fileName, e.target.value]);
        }}
        input={editFileText}
        value={editFileText !== "null" ? editFileText : ""}
      />
    </div>
  );
};

export default EditFileComponent;
