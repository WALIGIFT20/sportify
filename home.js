import { FaHome, FaSpotify } from "react-icons/fa";
import { RiFeedbackLine } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-box">
          <FaHome />
          <span>Home</span>
        </div>
        <div className="tread-box">
          <FaSpotify />
          <span>Tread</span>
        </div>
        <div className="tread-box">
          <RiFeedbackLine />
          <span>Feed</span>
        </div>
      </div>
    </>
  );
};
export default Home;
