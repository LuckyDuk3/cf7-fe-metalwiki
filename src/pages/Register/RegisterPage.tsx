import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 bg-[url('/metal-bg.jpg')] bg-cover bg-center text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-black bg-opacity-80 p-6 rounded-lg shadow-lg">
        <RegisterForm />
        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
