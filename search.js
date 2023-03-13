import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
const Search = () => {
  return (
    <div className="search-container">
      <div className="search-box">
        <div className="arrow-picker">
          <i>
            <BsArrowLeftShort />
          </i>
          <i className="second-picker">
            <BsArrowRightShort />
          </i>
        </div>
        <input type="text" placeholder="Search for artist songs" />
      </div>
    </div>
  );
};
export default Search;
