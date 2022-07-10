import Markdown from "react-markdown";
import "../Styles/FilePreviewStyles.css";

const FilePreviewComponent = ({ currFile }) => {
  return (
    <div id='filePreviewContainer'>
      <div id='filePreviewHeader'>
        <p id='filePreviewHeaderText'>PREVIEW</p>
      </div>

      <div id='markdownContainer'>
        <Markdown>{currFile}</Markdown>
      </div>
    </div>
  );
};

export default FilePreviewComponent;
