import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import "./../components/Auth/auth.css";

const AuthenticationPage = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    const handleNavigation = (path) => {
        navigate(`/auth/${path}`);
        setIsLogin(path === "login");
    };

    return (
        <div className="auth-container">
          
            <div className="auth-left">
                <h2 className="brand-name">Shopee</h2>
                <h1 className="welcome-text">Welcome To Shopee</h1>
                <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="social-icons">
                    <button className="social-btn"><FaFacebookF /></button>
                    <button className="social-btn"><FaTwitter /></button>
                    <button className="social-btn"><FaInstagram /></button>
                    <button className="social-btn"><FaLinkedinIn /></button>
                </div>
            </div>

           
            <div className="auth-right">
                <h2 className="form-title">{isLogin ? "Login to Your Account" : "Create an Account"}</h2>
                <div className="toggle-buttons">
                    <button
                        className={`toggle-btn ${isLogin ? "active" : ""}`}
                        onClick={() => handleNavigation("login")}
                    >
                        Login
                    </button>
                    <button
                        className={`toggle-btn ${!isLogin ? "active" : ""}`}
                        onClick={() => handleNavigation("signup")}
                    >
                        Register
                    </button>
                </div>

                <Outlet /> 
            </div>
        </div>
    );
};

export default AuthenticationPage;
