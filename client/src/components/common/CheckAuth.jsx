import { Navigate, useLocation } from "react-router-dom";

export default function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();


  if (!isAuthenticated && !(location.pathname.includes("/login") || location.pathname.includes("/signup"))) {
    return <Navigate to="/auth/login" />;
  }
  if (isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/signup"))) {
    return user?.role === "admin" ? <Navigate to="/admin/dashboard" /> : <Navigate to="/shopping/home" />;
  }
  if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("/admin")) {
    return <Navigate to="/unauthorized" />;
  }
  if (isAuthenticated && user?.role === "admin" && location.pathname.includes("/shopping")) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}