import { useState } from "preact/hooks";
import { Router, Route } from "preact-router";
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
                <Route path="/" component={HomePage} />
                <Route path="/filter" component={FilterPage} />
                <Route path="/product/:id" component={ProductDetailsPage} />
                <Route path="/cart" component={CartPage} />
            </Router>

            <Footer />

            {menuOpen && <SidebarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />}
        </>
    );
}
