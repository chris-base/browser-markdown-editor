import "../Styles/HeaderStyles.css";
import currFileIcon from "./assets/currFileIcon.png";
import saveIcon from "./assets/saveIcon.png";
import trashIcon from "./assets/trashIcon.png";
import uploadFileIcon from "./assets/uploadFileIcon.png";

const HeaderComponent = () => {
  return (
    <div id='mainHeaderContainer'>
      <div id='headerTitleTextContainer'>
        <p id='headerTitleText'>MARKDOWN</p>
      </div>

      <div id='headerVerticalDivider'></div>

      <div id='headerSplitContainer'>
        <div id='headerCurrFileContainer'>
          <div id='currFileImg' style={{ backgroundImage: "url(" + currFileIcon + ")" }}></div>
          <div id='currFileInfoContainer'>
            <p id='currFileTitleText'>Document Name</p>
            <p id='currFileNameText'>Current_file_name.md</p>
          </div>
        </div>

        <div id='headerEndContainer'>
          <div id='trashIcon' style={{ backgroundImage: "url(" + trashIcon + ")" }}></div>
          <div id='saveChangesButton'>
            <div id='saveChangeImg' style={{ backgroundImage: "url(" + saveIcon + ")" }}></div>
            <div id='saveChangesText'>Save Changes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
