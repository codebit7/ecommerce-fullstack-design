import { IoIosArrowUp } from "react-icons/io";
import './footer.css'

const FooterBar = () => {
  return (
    <div className="footer-bar ">
     <div className="container flex">
      <span className="footer-text">© 2023 Ecommerce.</span>
      <div className="footer-language">
        <img
          src="https://flagcdn.com/w40/us.png"
          alt="United States"
          className="footer-flag"
        />
        <span className="footer-lang-text">English</span>
        <IoIosArrowUp className="footer-arrow" />
      </div>
      </div>
    </div>
  );
};

export default FooterBar;
