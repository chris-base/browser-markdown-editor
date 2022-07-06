import { useState, useRef } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import EditFileComponent from "./Components/EditFileComponent";
import UploadFileComponent from "./Components/UploadFileComponent";

function App() {
  const [uploadFileVisible, setUploadFileVisible] = useState(false);

  const uploadButtonRef = useRef(null);

  return (
    <div className='App'>
      {uploadFileVisible ? <UploadFileComponent setUploadFileVisible={setUploadFileVisible} uploadButtonRef={uploadButtonRef} /> : <></>}

      <HeaderComponent setUploadFileVisible={setUploadFileVisible} uploadButtonRef={uploadButtonRef} />

      <div id='editFilePreviewContainer'>
        <EditFileComponent />
      </div>
    </div>
  );
}

export default App;
