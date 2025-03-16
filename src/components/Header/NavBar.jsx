import { useState } from "preact/hooks";
import { route } from "preact-router";
import logo from "./../../assets/Brand/logo-colored.png";
import { FaCartShopping, FaUser, FaBars } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import "./navStyle.css";

const NavBar = ({ setMenuOpen }) => {
    const [searchOpen, setSearchOpen] = useState(false);

    const navItems = [
        { name: "Profile", icon: <FaUser />, link: "/profile" },
        { name: "Message", icon: <MdMessage />, link: "/messages" },
        { name: "Orders", icon: <FaHeart />, link: "/orders" },
        { name: "My Cart", icon: <FaCartShopping />, link: "/cart" },
    ];

    return (
        <div className="navbar">
            <div className="container flex">
                <button className="menu-btn" onClick={() => setMenuOpen((prev) => !prev)}>
                    <FaBars />
                </button>

                
                <div className="navbar_logo">
                    <img src={logo} alt="website logo" onClick={() => route("/filter")} />
                </div>

                <div className={`searchbar ${searchOpen ? "active" : ""}`}>
                    <input type="text" placeholder="Search for products, brands and more" />
                    <div className="cateList">All Category &#9660;</div>
                    <button className="searchBtn">Search</button>
                </div>

                <div className="navbar_items">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.link} className="navbar_item">
                            <div className="nav_icon">{item.icon}</div>
                            <div className="nav_link">{item.name}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
