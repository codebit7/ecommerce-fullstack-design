import { useState } from "react";
import { FaMoon, FaBell, FaCog, FaClock, FaSearch } from "react-icons/fa";
import { Badge, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './../Styles/navbar.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const profileImage = "https://randomuser.me/api/portraits/men/45.jpg";

  return (
    <div className="navbar-container">
      <h5 className="page-title">CREATE PRODUCT</h5>

      <div className="navbar-icons">
        <FaMoon className="icon" onClick={() => setDarkMode(!darkMode)} />

        <div className="icon-badge">
          <FaBell className="icon" />
          <Badge bg="danger" pill className="badge">3</Badge>
        </div>

        <FaCog className="icon" />
        <FaClock className="icon" />

        <img src={profileImage} alt="User" className="profile-img" />

        <InputGroup className="search-box">
          <InputGroup.Text className="search-icon">
            <FaSearch />
          </InputGroup.Text>
          <FormControl placeholder="Search..." className="search-input" />
        </InputGroup>
      </div>
    </div>
  );
};

export default Navbar;
