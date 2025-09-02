import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  username?: string;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 text-white flex justify-between items-center p-4 z-50 shadow-lg">
      <div
        className="text-2xl font-metal text-red-600 cursor-pointer"
        onClick={() => navigate("/explore")}
      >
        MetalWiki
      </div>

      <div className="flex items-center gap-4">
        {location.pathname !== "/explore" && (
          <button
            onClick={() => navigate("/explore")}
            className="hover:text-red-400 transition"
          >
            Explore
          </button>
        )}

        {location.pathname !== "/band-manager" && (
          <button
            onClick={() => navigate("/band-manager")}
            className="hover:text-red-400 transition"
          >
            Band Manager
          </button>
        )}

        {username && (
          <>
            <span className="text-sm text-gray-400 hidden sm:inline">
              Logged in as <span className="font-bold">{username}</span>
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-700 hover:bg-red-800 px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
