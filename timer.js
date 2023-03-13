import { TiArrowShuffle } from "react-icons/ti";
import { GiSelfLove } from "react-icons/gi";
import { AiFillFastForward } from "react-icons/ai";
import { BsRepeat } from "react-icons/bs";

const Timer = () => {
  return (
    <div className="timer-box">
      <div className="icon-container">
        <div className="first-icons">
          <span className="love-icon">
            <GiSelfLove />
          </span>
          <span className="love-icon">
            <TiArrowShuffle />
          </span>
          <span className="love-icon">
            <TiArrowShuffle />
          </span>
        </div>
        <div className="second-icons">
          <span className="symbol">
            <BsRepeat />
          </span>
          <span className="symbol">
            <AiFillFastForward />
          </span>
          <span className="symbol">
            <BsRepeat />
          </span>
          <span className="symbol">
            <AiFillFastForward />
          </span>
          <span className="symbol">
            <TiArrowShuffle />
          </span>
        </div>
        <div className="third-icons">
          <span className="love-icon">
            <GiSelfLove />
          </span>
          <span className="love-icon">
            <TiArrowShuffle />
          </span>
          <span className="love-icon">
            <TiArrowShuffle />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Timer;
