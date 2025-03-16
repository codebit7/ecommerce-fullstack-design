import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import './topNav.css'

const TopNav = () => {

  const topNavItems = [
    { name: "All category" },
    { name: "Hot offers" },
    { name: "Gift boxes" },
    { name: "Projects" },
    { name: "Menu item" },
    { name: "Help", icon: <IoIosArrowDown className="topnav-arrow-icon" /> }
  ];
  return (
    
      <div className="topnav">
       <div className="container flex">
      <div className="topnav-left ">
      {/* <FaBars className="topnav-menu-icon" /> */}
      {topNavItems.map((item, index) => (
        <span key={index} className="topnav-item">
          {item.name} {item.icon && item.icon}
        </span>
      ))}
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
