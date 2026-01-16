import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getToken, rememberRedirect } from "../lib/auth";

export default function ProtectedRoute() {
  const location = useLocation();
  const token = getToken();
  if (!token) {
    rememberRedirect(location.pathname + location.search + location.hash);
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
