import Pic from "../image/IMG-20230309-WA0005.jpg";
const Borad = () => {
  return (
    <div className="borad-box">
      <div className="image-box">
        <img alt="" src={Pic} />
      </div>
      <div className="pic-card">
        <span>Artist</span>
        <p className="world">
          On Top
          <br />
          Of The World
        </p>
        <div className="button-box">
          <button className="play">Play</button>
          <button className="fellow">Fellow</button>
        </div>
      </div>
    </div>
  );
};
export default Borad;
