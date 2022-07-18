import "../Styles/HeaderStyles.css";
import currFileIcon from "./assets/currFileIcon.png";
import saveIcon from "./assets/saveIcon.png";
import trashIcon from "./assets/trashIcon.png";
import fileUploadIcon from "./assets/fileUploadIcon.png";
import fileDownloadIcon from "./assets/fileDownloadIcon.png";

const HeaderComponent = ({ setUploadFileVisible, uploadButtonRef, setTrashFileVisible, trashCanRef, currFile, fileStatus, setFileState }) => {
  const saveFile = () => {
    localStorage.setItem("currFile", currFile[1]);
    localStorage.setItem("currFileName", currFile[0]);
    setFileState(1);
  };

  const downloadFile = () => {
    setFileState(0);
    const element = document.createElement("a");
    const file = new Blob([currFile[1]], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = currFile[0];
    document.body.appendChild(element);
    element.click();
  };

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
            ref={uploadButtonRef[0]}
          ></div>
          <div id='currFileInfoContainer'>
            <p id='currFileTitleText'>Document Name</p>
            <p id='currFileNameText'>{currFile[0]}</p>
          </div>
        </div>

        <div id='headerEndContainer'>
          <div
            id='trashIcon'
            style={{ backgroundImage: "url(" + trashIcon + ")" }}
            ref={trashCanRef}
            onClick={() => {
              setTrashFileVisible(true);
            }}
          ></div>
          <div
            id='saveChangesButton'
            ref={uploadButtonRef[1]}
            style={
              currFile[1] === "null"
                ? { backgroundColor: "#00bd3c" }
                : fileStatus === 0
                ? { backgroundColor: "#ff9317" }
                : { backgroundColor: "#3434eb" }
            }
            onClick={() => {
              currFile[1] === "null" ? setUploadFileVisible(true) : fileStatus === 0 ? saveFile() : downloadFile();
            }}
          >
            <div
              id='saveChangeImg'
              style={{ backgroundImage: "url(" + (currFile[1] === "null" ? fileUploadIcon : fileStatus === 0 ? saveIcon : fileDownloadIcon) + ")" }}
            ></div>
            <div id='saveChangesText'>{currFile[1] === "null" ? "Upload File" : fileStatus === 0 ? "Save Changes" : "Download File"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
