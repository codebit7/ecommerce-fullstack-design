import { Navigate, Outlet } from "react-router-dom";

const Protect = ({ requiredRole }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  if (user.role !== requiredRole) {
    return <Navigate to={user.role === "admin" && window.location.pathname.startsWith("/admin") ? "/admin" : "/"} replace />;
  }
  

  return <Outlet />;
};

export default Protect;
