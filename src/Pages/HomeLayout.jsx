import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar";
import TopNav from "../components/Header/TopNav";
import Footer from "../components/Footer/Footer";

const HomeLayout = ({ setMenuOpen }) => {
  return (
    <>
      <NavBar setMenuOpen={setMenuOpen} />
      <TopNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
