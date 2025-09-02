import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 bg-[url('/metal-bg.jpg')] bg-cover bg-center text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-black bg-opacity-80 p-6 rounded-lg shadow-lg">
        <LoginForm />
        <p className="text-center text-sm text-gray-400 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-red-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
