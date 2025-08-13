//Authentication context will manage and provide the user's authentication state throughout the application

import { createContext, useState, useContext, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

//define the shape of the context value
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

//create the context with a default undefined value
// A runtime check will prevent using it without a provider
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//define the props for the provider component
interface AuthProviderProps {
  //allows this component to wrap other components
  children: ReactNode;
}

//Create the AuthProvider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  // State to track if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  //function to simulate user login
  const login = () => {
    setIsAuthenticated(true);
    //redirect to the admin page after logging in
    navigate("/admin");
  };

  //Function to simulate user logout
  const logout = () => {
    setIsAuthenticated(false);
    // Redirect to the home page after logging out
    navigate("/");
  };

  //provide the state and functions to child components
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily consume the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  //throw an error if the hook is used outside of an AuthProvider
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
