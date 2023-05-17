import "../../styles/Main/FourthPage.css";
import dongwon from "../../images/dongwon.jpg";

const FourthPage = () => {
  return (
    <div id="fourthPage_container">
      <div className="movie_container">
        <div className="title">
          <h1>MOVIE</h1>
          <span>MORE &gt;</span>
        </div>
        <div className="movie_content">
          <div className="movie_text">
            <h1>
              Cannes 2023:
              <br /> Screen dailies
            </h1>
            <span>
              Browse Screen International’s daily editions from the 2023 Cannes
              Film Festival, which runs May 16-27.
            </span>
          </div>
          <div className="movie_image">
            <img src={dongwon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
