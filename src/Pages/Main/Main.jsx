import FirstPage from "../../Components/Main/FirstPage";
import SecondPage from "../../Components/Main/SecondPage";
import ThirdPage from "../../Components/Main/ThirdPage";
import FourthPage from "../../Components/Main/FourthPage";

import "../../styles/Main/Main.css";

function Main() {
  const overFlowHidden = (active) => {
    const container = document.querySelector("#main_container");
    if (active) {
      container.style.overflow = "hidden";
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
      <ThirdPage />
      <FourthPage />
    </div>
  );
}

export default Main;
