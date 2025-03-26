import React from "react";
import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import './../Styles/adminlayout.css'

const AdminLayout = () => {
  return (
    <div className="admin-layout">
    <Sidebar />
    <div className="main-content">
        <Navbar />
        <Outlet />
    </div>
   

    
    </div>
  );
};

export default AdminLayout;