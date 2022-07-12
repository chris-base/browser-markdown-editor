import "../Styles/HeaderStyles.css";
import currFileIcon from "./assets/currFileIcon.png";
import saveIcon from "./assets/saveIcon.png";
import trashIcon from "./assets/trashIcon.png";
import fileUploadIcon from "./assets/fileUploadIcon.png";

const HeaderComponent = ({ setUploadFileVisible, uploadButtonRef, currFile }) => {
  return (
    <div id='mainHeaderContainer'>
      <div id='headerTitleTextContainer'>
        <p id='headerTitleText'>MARKDOWN</p>
      </div>

      <div id='headerVerticalDivider'></div>

      <div id='headerSplitContainer'>
        <div id='headerCurrFileContainer'>
          <div
            id='currFileImg'
            style={{ backgroundImage: "url(" + currFileIcon + ")" }}
            onClick={() => setUploadFileVisible(true)}
            ref={uploadButtonRef}
          ></div>
          <div id='currFileInfoContainer'>
            <p id='currFileTitleText'>Document Name</p>
            <p id='currFileNameText'>{currFile !== "null" ? currFile : "No File Uploaded"}</p>
          </div>
        </div>

        <div id='headerEndContainer'>
          <div id='trashIcon' style={{ backgroundImage: "url(" + trashIcon + ")" }}></div>
          <div id='saveChangesButton'>
            <div id='saveChangeImg' style={{ backgroundImage: "url(" + currFile === "null" ? fileUploadIcon : saveIcon + ")" }}></div>
            <div id='saveChangesText'>{currFile === "null" ? "Upload File" : "Save Changes"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
