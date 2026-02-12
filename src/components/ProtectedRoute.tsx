import { Navigate, useSearchParams } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const searchparams = useSearchParams();
  const [params] = searchparams;
  const authenticated = params.get("authenticated");

  const isAuthenticated = authenticated === "true";

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
