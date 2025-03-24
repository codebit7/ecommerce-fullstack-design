import React, { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:3000/api/v1";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const [errors, setErrors] = useState({});

    
    const validateForm = () => {
        let valid = true;
        let newErrors = {};
    
        if (!formData.name.trim()) {
            newErrors.name = "Full Name is required";
            valid = false;
        }
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
        if (!formData.role) {
            newErrors.role = "Please select a role";
            valid = false;
        }
    
        setErrors(newErrors);
        return valid;
    };

    const onChangeHandle = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
        setErrors((prev) => ({ ...prev, [key]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            setIsLoading(false);

            if (res.ok) {
                console.log("User created successfully", await res.json());
                navigate("/auth/login");
            } else {
                console.log("Error creating user");
                setErrors((prev) => ({ ...prev, general: "Registration failed. Try again." }));
            }
        } catch (error) {
            console.error("Network error:", error);
            setIsLoading(false);
            setErrors((prev) => ({ ...prev, general: "Network error. Please try again later." }));
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => onChangeHandle("name", e.target.value)}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

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

            <select
                className="inputs"
                value={formData.role}
                onChange={(e) => onChangeHandle("role", e.target.value)}
            >
                <option value="">Select Role</option>
                <option value="user">user</option>
                <option value="admin">admin</option>
            </select>
            {errors.role && <p className="error-text">{errors.role}</p>}

            <div className="terms">
                <input type="checkbox" required />
                <p>I agree to the terms of service</p>
            </div>

            {errors.general && <p className="error-text">{errors.general}</p>}

            <button type="submit" className="submit-btn">
                Register {isLoading && <AiOutlineLoading3Quarters />}
            </button>

            <p className="switch-text" onClick={() => navigate("/auth/login")}>
                Already a member? Login here
            </p>
        </form>
    );
};

export default SignUp;
