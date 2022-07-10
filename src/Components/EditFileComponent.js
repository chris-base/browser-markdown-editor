import { useState } from "react";
import "../Styles/EditFileStyles.css";

const EditFileComponent = ({ currFile }) => {
  const [editFileText, setEditFileText] = useState(currFile);

  return (
    <div id='editFileContainer'>
      <div id='editFileHeader'>
        <p id='editFileHeaderText'>MARKDOWN</p>
      </div>
      <textarea id='editFileTextArea' type='text' onChange={(e) => setEditFileText(e.target.value)} input={editFileText} value={editFileText} />
    </div>
  );
};

export default EditFileComponent;
