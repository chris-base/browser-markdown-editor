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
  const [currFile, setCurrFile] = useState([localStorage.getItem("currFileName"), localStorage.getItem("currFile")]);

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
        <TrashFileComponent setTrashFileVisible={setTrashFileVisible} trashCanRef={trashCanRef} setCurrFile={setCurrFile} />
      ) : (
        <></>
      )}

      <HeaderComponent
        setUploadFileVisible={setUploadFileVisible}
        uploadButtonRef={uploadButtonRef}
        setTrashFileVisible={setTrashFileVisible}
        trashCanRef={trashCanRef}
        currFile={currFile[0]}
      />

      <div id='editPreviewContainer'>
        <div id='editFilePreviewContainer'>
          <EditFileComponent fileName={currFile[0]} currFile={currFile[1]} setCurrFile={setCurrFile} />
        </div>

        <div id='filePreviewContainer'>
          <FilePreviewComponent currFile={currFile[1]} />
        </div>
      </div>
    </div>
  );
}

export default App;
