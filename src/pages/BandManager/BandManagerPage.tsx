import React from "react";
import { useExplore } from "../Explore/useExplore";
import BandManager from "../../components/BandManager";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BandManagerPage: React.FC = () => {
  const { bands, loading, error, username, refresh } = useExplore();

  return (
    <div className="min-h-screen bg-gray-950 bg-[url('/cropped3.png')] bg-cover bg-center text-white px-6 pt-24 pb-10">
      <Navbar username={username} />
      <h1 className="text-4xl text-white font-metal text-center mb-8">
        Band Manager
      </h1>

      {loading ? (
        <p className="text-center">Loading bands...</p>
      ) : error ? (
        <p className="text-center text-red-400">{error}</p>
      ) : (
        <BandManager username={username} bands={bands} onRefresh={refresh} />
      )}
          <Footer />

    </div>
  );
};

export default BandManagerPage;
