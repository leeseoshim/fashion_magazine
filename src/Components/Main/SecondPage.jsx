import "../../styles/Main/SecondPage.css";
import mainImg from "../../images/mainImg.jpg";

const SecondPage = () => {
  return (
    <div id="secondPage_container">
      <div className="container">
        <div className="title">
          <h1>RUNWAY</h1>
          <span>MORE &gt;</span>
        </div>
        <div className="content">
          <div className="fashion_image">
            <img src={mainImg} alt="" />
          </div>
          <div className="text">
            <h1>READY-TO-WEAR</h1>
            <span>The Fall 2023 Trends Reflect the World Around Us </span>
            <div className="desc">
              Say Hello to Real Life:
              <br /> Trends FROM Fall 2023 You'll Actually Wear.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondPage;
