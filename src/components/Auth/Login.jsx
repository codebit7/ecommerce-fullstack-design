import React, { useState, useEffect } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../Store/slices/authSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const { loading, isAuthenticated, error, user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated && user) {
            localStorage.setItem("user", JSON.stringify(user)); 
            navigate(user.role === "admin" ? "/admin" : "/"); 
        }
    }, [isAuthenticated, user, navigate]);

    const validateForm = () => {
        let valid = true;
        let newErrors = {};
    
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
            valid = false;
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    };

    const onChangeHandle = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
        setErrors((prev) => ({ ...prev, [key]: "" }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        dispatch(loginRequest(formData)); 
    };

    return (
        <form className="auth-form">
            <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => onChangeHandle("email", e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
            
            <div className="password-container">
               <input
                type={showPassword ? "text" : "password"}
                 placeholder="Password"
                 value={formData.password}
                 onChange={(e) => onChangeHandle("password", e.target.value)}
                />
                <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <BiSolidShow /> : <BiSolidHide />}
                </span>
             </div>
            {errors.password && <p className="error-text">{errors.password}</p>}

            {error && <p className="error-text">{error}</p>}

            <button className="submit-btn" onClick={handleLogin} disabled={loading}>
                Login {loading && <AiOutlineLoading3Quarters />}
            </button>

            <p className="switch-text" onClick={() => navigate("/auth/signup")}>
                New here? Register now
            </p>
        </form>
    );
};

export default Login;
