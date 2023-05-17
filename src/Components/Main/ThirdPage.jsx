import "../../styles/Main/ThirdPage.css";
import karina from "../../images/karina.jpg";

const ThirdPage = () => {
  return (
    <div id="thirdPage_container">
      <div className="fashion_container">
        <div className="title">
          <h1>FASHION</h1>
          <span>MORE &gt;</span>
        </div>
        <div className="image">
          <img src={karina} alt="" />
        </div>
        <div className="fashion_text">
          <h1>다시, 스모키 메이크업! </h1>
          <span>5월 셋째 주의 뷰티 인스타그램</span>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
