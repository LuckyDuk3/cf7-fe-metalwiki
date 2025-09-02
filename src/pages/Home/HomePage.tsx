import React from "react";
import { useHomePage } from "./useHomePage";

const HomePage: React.FC = () => {
  const { navigate } = useHomePage();

  return (
    <div className="min-h-screen bg-gray-950 bg-[url('/cropped3.png')] bg-cover bg-center text-white flex flex-col items-center justify-center px-4">
      <div className="bg-black/80 backdrop-blur-md p-10 rounded-xl text-center shadow-xl">
        <h1 className="text-5xl font-metal mb-10 tracking-widest text-red-600 animate-pulse">
          MetalWiki
        </h1>

        <p className="mb-10 text-gray-300 text-lg max-w-md">
          The underground vault of metal bands. Explore. Contribute. Raise the horns.
        </p>

        <div className="flex gap-6 justify-center">
          <button
            onClick={() => navigate("/login")}
            className="bg-red-700 hover:bg-red-800 px-6 py-3 rounded uppercase font-bold tracking-wide shadow-lg transition transform hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded uppercase font-bold tracking-wide shadow-lg transition transform hover:scale-105"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
