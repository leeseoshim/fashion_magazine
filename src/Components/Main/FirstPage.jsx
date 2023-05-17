import video from "../../videos/main.mp4";
import "../../styles/Main/FirstPage.css";

const FirstPage = ({ overFlowHidden }) => {
  const triggerAddActive = () => {
    const trigger = document.querySelector(".menu_trigger");
    const modalGnb = document.querySelector(".modal_gnb");

    trigger.classList.toggle("active");
    if (trigger.classList.contains("active")) {
      modalGnb.style.display = "block";
      overFlowHidden(true);
    } else {
      modalGnb.style.display = "none";
      overFlowHidden(false);
    }
  };

  return (
    <div id="firstPage_container">
      <div className="header">
        <h1 className="logo">SHIM</h1>
        <div className="menu">
          <ul>
            <li>RUNWAY</li>
            <li>FASHION</li>
            <li>MOVIE</li>
          </ul>
        </div>
      </div>
      <div className="menu_trigger" onClick={triggerAddActive}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="video">
        <video src={video} loop autoPlay muted></video>
      </div>
      <div className="modal_gnb">
        <div className="gnb">
          <ul>
            <li>RUNWAY</li>
            <li>FASHION</li>
            <li>MOVIE</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
