import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-white flex justify-center items-center p-4 z-50 shadow-inner mt-12 font-metal text-red-600 text-sm select-none">
      <a
        href="https://github.com/LuckyDuk3"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-400 transition"
      >
        © LuckyDuk3 | GitHub
      </a>
    </footer>
  );
};

export default Footer;
