import { useState } from "preact/hooks";
import { route } from "preact-router";
import logo from "./../../assets/Brand/logo-colored.png";
import { FaCartShopping, FaUser, FaBars } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import "./navStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../Store/slices/productSlice";

const categories = [
    "All",
    "Fashion & Design",
    "Electronics",
    "Home & Kitchen",
    "Health & Beauty",
    "Sports & Outdoors",
    "Automobiles",
];

const NavBar = ({ setMenuOpen }) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [input , setInput] = useState("");
    const {filters} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const navItems = [
        { name: "Profile", icon: <FaUser />, link: "/profile" },
        { name: "Message", icon: <MdMessage />, link: "/messages" },
        { name: "Orders", icon: <FaHeart />, link: "/orders" },
        { name: "My Cart", icon: <FaCartShopping />, link: "/cart" },
    ];

    
    
    const handleSearch =()=>{
        dispatch(updateFilter({key: 'search',value:input }));
        dispatch(updateFilter({key: 'category',value: selectedCategory }));

        
        
    }

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
                    <input type="text" 
                    placeholder="Search for products, brands and more"
                    onChange={(e)=>setInput(e.target.value)} 
                    />

                    
                    <div className="cateList" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        {filters.category} &#9660;
                        {dropdownOpen && (
                            <ul className="dropdown">
                                {categories.map((category, index) => (
                                    <li key={index} onClick={(e) => { 
                                        e.stopPropagation();
                                        setSelectedCategory(category); 
                                        setDropdownOpen(false); 
                                    }}>
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button className="searchBtn" onClick={()=>handleSearch()}>Search</button>
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
