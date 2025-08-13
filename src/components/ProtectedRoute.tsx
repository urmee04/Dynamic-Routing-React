//this component protects routes from unauthenticated access

import { Navigate, useLocation } from "react-router-dom";
//use custom hook for safety
import { useAuth } from "../context/AuthContext";

//define the props for the ProtectedRoute component
interface ProtectedRouteProps {
  //The protected component to render
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  //get auth state from context
  const { isAuthenticated } = useAuth();
  const location = useLocation(); // Track current location

  //if the user is not authenticated, redirect them to the login page
  if (!isAuthenticated) {
    // The state prop remembers the page the user tried to access
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the child component, the protected page
  return children;
};

export default ProtectedRoute;
