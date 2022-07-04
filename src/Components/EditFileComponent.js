import { useState } from "react";
import "../Styles/EditFileStyles.css";

const EditFileComponent = () => {
  const [editFileText, setEditFileText] = useState("");

  return (
    <div id='editFileContainer'>
      <div id='editFileHeader'>
        <p id='editFileHeaderText'>MARKDOWN</p>
      </div>
      <textarea id='editFileTextArea' type='text' onChange={(e) => setEditFileText(e.target.value)} input={editFileText} />
    </div>
  );
};

export default EditFileComponent;
