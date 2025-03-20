import { useState } from "preact/hooks";
import Router from "preact-router";
import "./app.css";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import TopNav from "./components/Header/TopNav";
import HomePage from "./Pages/HomePage";
import FilterPage from "./Pages/FilterPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CartPage from "./Pages/CartPage";
import SidebarMenu from "./components/Side Bar/SideBarMenu";

export function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <NavBar setMenuOpen={setMenuOpen} />
            <TopNav />
            <Router>
                <HomePage path="/" />
                <FilterPage path="/filter" />
                <ProductDetailsPage path="/product/:id" />
                <CartPage path="/cart" />
            </Router>
            <Footer />
            {menuOpen && <SidebarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />}
        </>
    );
}

export default App;