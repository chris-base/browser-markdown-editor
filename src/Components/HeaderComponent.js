import "../Styles/HeaderStyles.css";

const HeaderComponent = () => {
  return (
    <div id='mainHeaderContainer'>
      <div id='headerTitleTextContainer'>
        <p id='headerTitleText'>MARKDOWN</p>
      </div>

      <div id='headerVerticalDivider'></div>

      <div id='headerSplitContainer'>
        <div id='headerCurrFileContainer'>
          <div id='currFileImg'></div>
          <div id='currFileInfoContainer'>
            <p id='currFileTitleText'>Document Name</p>
            <p id='currFileNameText'>Current_file_name.md</p>
          </div>
        </div>

        <div id='headerEndContainer'>
          <div id='trashIcon'></div>
          <div id='saveChangesButton'>
            <div id='saveChangeImg'></div>
            <div id='saveChangesText'>Save Changes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
