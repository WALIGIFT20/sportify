import { TbMathGreater } from "react-icons/tb";
import Pic from "../image/IMG-20230309-WA0005.jpg";
const Tyes = () => {
  return (
    <div className="tyes-container">
      <div className="tyes-card">
        <div className="pic-box">
          <div className="pic-carrier">
            <img alt="" src={Pic} />
          </div>
        </div>
        <div className="tyes">
          <p>Ceptari Tyes</p>
        </div>
        <div className="greater-sign">
          <p>
            <i>
              <TbMathGreater />
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Tyes;
