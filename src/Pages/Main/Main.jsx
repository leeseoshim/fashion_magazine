import FirstPage from "../../Components/Main/FirstPage";
import SecondPage from "../../Components/Main/SecondPage";

import "../../styles/Main/Main.css";

function Main() {
  const overFlowHidden = (active) => {
    const container = document.querySelector("#main_container");
    if (active) {
      container.style.overflow = "scroll";
      container.style.height = "calc(100vh - 105px)";
    } else {
      container.style.overflow = "";
      container.style.height = "";
    }
  };
  return (
    <div id="main_container">
      <FirstPage overFlowHidden={overFlowHidden} />
      <SecondPage />
    </div>
  );
}

export default Main;
