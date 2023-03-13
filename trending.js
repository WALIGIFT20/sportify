

import { MdKeyboardArrowRight } from "react-icons/md";
const Trending = () => {
  return (
    <>
      <p>Whats hot 💥</p>
      <div className="trending-box">
        <div className="trending-carrier">
          <span>Treading</span>
        </div>
        <div className="move">
          <p>
            Move
            <span className="greater">
              <MdKeyboardArrowRight />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Trending;
