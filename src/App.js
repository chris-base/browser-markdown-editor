import { useState } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import EditFileComponent from "./Components/EditFileComponent";
import UploadFileComponent from "./Components/UploadFileComponent";

function App() {
  const [uploadFileVisible, setUploadFileVisible] = useState(false);

  return (
    <div className='App'>
      {uploadFileVisible ? <UploadFileComponent uploadFileVisible={uploadFileVisible} setUploadFileVisible={setUploadFileVisible} /> : <></>}

      <HeaderComponent setUploadFileVisible={setUploadFileVisible} />

      <div id='editFilePreviewContainer'>
        <EditFileComponent />
      </div>
    </div>
  );
}

export default App;
