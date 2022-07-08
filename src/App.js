import { useState, useRef } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import EditFileComponent from "./Components/EditFileComponent";
import UploadFileComponent from "./Components/UploadFileComponent";
import FilePreviewComponent from "./Components/FilePreviewComponent";

function App() {
  const [uploadFileVisible, setUploadFileVisible] = useState(false);

  const uploadButtonRef = useRef(null);

  return (
    <div className='App'>
      {uploadFileVisible ? <UploadFileComponent setUploadFileVisible={setUploadFileVisible} uploadButtonRef={uploadButtonRef} /> : <></>}

      <HeaderComponent setUploadFileVisible={setUploadFileVisible} uploadButtonRef={uploadButtonRef} />

      <div id='editPreviewContainer'>
        <div id='editFilePreviewContainer'>
          <EditFileComponent />
        </div>

        <div id='filePreviewContainer'>
          <FilePreviewComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
