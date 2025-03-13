import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import './topNav.css'

const TopNav = () => {
  return (
    
      <div className="topnav">
       <div className="container flex">
      <div className="topnav-left ">
        <FaBars className="topnav-menu-icon" />
        <span className="topnav-item">All category</span>
        <span className="topnav-item">Hot offers</span>
        <span className="topnav-item">Gift boxes</span>
        <span className="topnav-item">Projects</span>
        <span className="topnav-item">Menu item</span>
        <span className="topnav-item">
          Help <IoIosArrowDown className="topnav-arrow-icon" />
        </span>
      </div>
      <div className="topnav-right">
        <span className="topnav-item">
          English, USD <IoIosArrowDown className="topnav-arrow-icon" />
        </span>
        <span className="topnav-item">
          Ship to <img src="https://flagcdn.com/w40/de.png" alt="Germany" className="topnav-flag-icon" />
          <IoIosArrowDown className="topnav-arrow-icon" />
        </span>
      </div>
      </div>
      </div>
    
  );
};

export default TopNav;
