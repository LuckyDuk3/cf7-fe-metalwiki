import React, { useState } from "react";
import { useExplore } from "./useExplore";
import BandCard from "./BandCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ExplorePage: React.FC = () => {
  const { bands, loading, error, username } = useExplore();
  const [flippedBandId, setFlippedBandId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-950 bg-[url('/explore.png')] bg-cover bg-fixed text-white px-8 py-6 pt-24">
      {/* Navbar with username and logout logic */}
      <Navbar username={username} />

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-5xl font-metal text-red-600 drop-shadow-lg tracking-widest text-center">
          MetalWiki
        </h1>
        <p className="text-center text-gray-300 mt-2 text-lg">
          Explore the legends of metal history
        </p>
      </header>

      {/* Error message */}
      {error && (
        <div className="text-center text-red-400 mb-4 font-semibold">
          {error}
        </div>
      )}

      {/* Loading or empty state */}
      {loading ? (
        <div className="text-center text-xl">Loading bands...</div>
      ) : bands.length === 0 ? (
        <div className="text-center text-lg text-gray-400">
          No bands found.
        </div>
      ) : (
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bands.map((band) => (
            <BandCard
              key={band._id}
              band={band}
              isFlipped={flippedBandId === band._id}
              onClick={() =>
                setFlippedBandId(flippedBandId === band._id ? null : band._id)
              }
            />
          ))}
        </ul>
      )}
            <Footer />
    </div>
  );
};

export default ExplorePage;
