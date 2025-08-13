import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        The page or post you are looking for does not exist
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
