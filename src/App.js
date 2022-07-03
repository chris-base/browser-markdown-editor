import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import EditFileComponent from "./Components/EditFileComponent";

function App() {
  return (
    <div className='App'>
      <HeaderComponent />

      <div id='editFilePreviewContainer'>
        <EditFileComponent />
      </div>
    </div>
  );
}

export default App;
