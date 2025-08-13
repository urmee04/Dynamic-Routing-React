import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  //get authentication state and functions from the context
  const { isAuthenticated, logout } = useAuth();

  //active NavLink
  const activeLinkStyle = {
    textDecoration: "none",
    color: "#3b82f6",
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-blue-400 transition-colors"
        >
          Blog App
        </Link>
        <ul className="flex items-center space-x-6">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="hover:text-blue-400 transition-colors"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="hover:text-blue-400 transition-colors"
            >
              Blog
            </NavLink>
          </li>
          {/* Conditionally render links based on authentication status */}
          {isAuthenticated ? (
            <>
              <li>
                <NavLink
                  to="/admin"
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : undefined
                  }
                  className="hover:text-blue-400 transition-colors"
                >
                  Admin
                </NavLink>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-colors"
                >
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors"
              >
                Log In
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
