import { GrFavorite } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiAlbum } from "react-icons/bi";

const Collection = () => {
  return (
    <>
      <div className="discover-container">
        <h5>Your Collection</h5>
        <div className="discover-items">
          <i>
            <GrFavorite />
          </i>
          <span>Favourite Songs</span>
        </div>
        <div className="discover-items">
          <i>
            <HiOutlineUserGroup />
          </i>
          <span>Artist</span>
        </div>
        <div className="discover-items">
          <i><BiAlbum/></i>
          <span>Albums</span>
        </div>
        <hr className="line-bar" />
      </div>
    </>
  );
};
export default Collection;
