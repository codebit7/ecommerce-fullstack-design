import { useState } from "preact/hooks";
import { useNavigate, Link } from "react-router-dom";
import logo from "./../../assets/Brand/logo-colored.png";
import { FaCartShopping, FaUser, FaBars } from "react-icons/fa6";
import { FaHeart, FaJediOrder } from "react-icons/fa";
import { MdFavorite, MdMessage } from "react-icons/md";
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
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [input, setInput] = useState("");
  const { filters } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const navItems = [
    { name: "Profile", icon: <FaUser />, link: "/profile" },
    { name: "Wishlist", icon: <MdFavorite />, link: "/wishlist" },
    { name: "Orders", icon: <FaJediOrder />, link: "/orders" },
    { name: "My Cart", icon: <FaCartShopping />, link: "/cart" },
  ];

  const handleSearch = () => {
    dispatch(updateFilter({ key: "search", value: input }));
    dispatch(updateFilter({ key: "category", value: selectedCategory }));
    navigate("/filter"); 
  };

  return (
    <div className="user-navbar">
      <div className="container flex">
        <button className="user-menu-btn" onClick={() => setMenuOpen((prev) => !prev)}>
          <FaBars />
        </button>

        <div className="user-navbar_logo">
          <img src={logo} alt="website logo" onClick={() => navigate("/filter")} />
        </div>

        <div className={`user-searchbar ${searchOpen ? "user-active" : ""}`}>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="user-cateList" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {selectedCategory} &#9660;
            {dropdownOpen && (
              <ul className="user-dropdown">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory(category);
                      setDropdownOpen(false);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="user-searchBtn" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="user-navbar_items">
          {navItems.map((item, index) => (
            <Link key={index} to={item.link} className="user-navbar_item">
              <div className="user-nav_icon">{item.icon}</div>
              <div className="user-nav_link">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
