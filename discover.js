import { BsNewspaper, BsCalendar4Event } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";


const Discover = () => {
  return (
    <div className="discover-container">
      <h5>Discover</h5>
      <div className="discover-items">
        <i>
          <BsNewspaper />
        </i>
        <span>New and Notable</span>
      </div>
      <div className="discover-items">
        <i>
          <FaCalendarAlt />
        </i>
        <span>Release Calender</span>
      </div>
      <div className="discover-items">
        <i><BsCalendar4Event/></i>
        <span>Events</span>
      </div>
    </div>
  );
};
export default Discover;
