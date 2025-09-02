import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import ExplorePage from "./pages/Explore/ExplorePage";
import BandManagerPage from "./pages/BandManager/BandManagerPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="explore" element={<ExplorePage />} />
      <Route path="/band-manager" element={<BandManagerPage />} />
    </Routes>
  );
};

export default App;
