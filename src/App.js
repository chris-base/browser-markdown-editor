import { useState, useRef } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import EditFileComponent from "./Components/EditFileComponent";
import UploadFileComponent from "./Components/UploadFileComponent";
import TrashFileComponent from "./Components/TrashFileComponent";
import FilePreviewComponent from "./Components/FilePreviewComponent";

function App() {
  const [uploadFileVisible, setUploadFileVisible] = useState(false);
  const [trashFileVisible, setTrashFileVisible] = useState(false);
  const [currFile, setCurrFile] = useState([
    localStorage.getItem("currFileName") === "null" ? "untitled.md" : localStorage.getItem("currFile"),
    localStorage.getItem("currFile"),
  ]);
  const [fileStatus, setFileState] = useState(0);

  localStorage.setItem("currFile", currFile[1]);
  localStorage.setItem("currFileName", currFile[0]);

  const uploadButtonRef = [useRef(null), useRef(null)];
  const trashCanRef = useRef(null);

  return (
    <div className='App'>
      {uploadFileVisible ? (
        <UploadFileComponent setUploadFileVisible={setUploadFileVisible} uploadButtonRef={uploadButtonRef} setCurrFile={setCurrFile} />
      ) : (
        <></>
      )}

      {trashFileVisible ? (
        <TrashFileComponent
          setTrashFileVisible={setTrashFileVisible}
          trashCanRef={trashCanRef}
          setCurrFile={setCurrFile}
          setFileState={setFileState}
        />
      ) : (
        <></>
      )}

      <HeaderComponent
        setUploadFileVisible={setUploadFileVisible}
        uploadButtonRef={uploadButtonRef}
        setTrashFileVisible={setTrashFileVisible}
        trashCanRef={trashCanRef}
        currFile={currFile}
        fileStatus={fileStatus}
        setFileState={setFileState}
      />

      <div id='editPreviewContainer'>
        <div id='editFilePreviewContainer'>
          <EditFileComponent
            fileName={currFile[0]}
            currFile={currFile[1]}
            setCurrFile={setCurrFile}
            fileStatus={fileStatus}
            setFileState={setFileState}
          />
        </div>

        <div id='filePreviewContainer'>
          <FilePreviewComponent currFile={currFile[1]} />
        </div>
      </div>
    </div>
  );
}

export default App;
