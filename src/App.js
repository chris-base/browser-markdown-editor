import { useState } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import EditFileComponent from "./Components/EditFileComponent";
import UploadFileComponent from "./Components/UploadFileComponent";

function App() {
  return (
    <div className='App'>
      <UploadFileComponent />

      <HeaderComponent />

      <div id='editFilePreviewContainer'>
        <EditFileComponent />
      </div>
    </div>
  );
}

export default App;
