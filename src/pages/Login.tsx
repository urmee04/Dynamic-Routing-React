import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Login Page</h1>
      <p className="mb-4 text-gray-600">
        Click the button below to simulate logging in.
      </p>
      <button
        onClick={login}
        className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
