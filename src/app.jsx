import { useState } from "preact/hooks";
import { Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import SidebarMenu from "./components/Side Bar/SideBarMenu";
import AuthenticationPage from "./Pages/AuthenticationPage";
import HomeLayout from "./Pages/HomeLayout";
import HomePage from "./Pages/HomePage";
import FilterPage from "./Pages/FilterPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CartPage from "./Pages/CartPage";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Protect from "./components/Auth/Protect";
import AdminLayout from "./Admin/Pages/AdminLayout";
import ViewProducts from "./Admin/Components/ViewProducts";
import CreateProduct from "./Admin/Components/CreateProduct";

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <>
      <Routes>
       
        <Route path="/auth" element={<AuthenticationPage />}>
          <Route index element={<Navigate to="/auth/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

       
        <Route element={<Protect requiredRole="user" />}>
          <Route path="/" element={<HomeLayout setMenuOpen={setMenuOpen} />}>
            <Route index element={<HomePage />} />
            <Route path="filter" element={<FilterPage />} />
            <Route path="product/:id" element={<ProductDetailsPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Route>

        
        <Route element={<Protect requiredRole="admin" />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/view" />} /> {/* Default Admin Page */}
            <Route path="view" element={<ViewProducts />} />
            <Route path="create" element={<CreateProduct />} />
          </Route>
        </Route>

      
        <Route path="*" element={<Navigate to="/unauthorized" />} />
      </Routes>

      
      {menuOpen && <SidebarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />}
    </>
  );
}

export default App;
