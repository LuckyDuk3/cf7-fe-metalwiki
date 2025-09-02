import React from "react";
import type { Band } from "./types";

interface Props {
  band: Band;
  isFlipped: boolean;
  onClick: () => void;
}

const BandCard: React.FC<Props> = ({ band, isFlipped, onClick }) => {
  return (
    <li
      key={band._id}
      className="relative w-full h-64 cursor-pointer [perspective:1000px]"
      onClick={onClick}
    >
      <div
        className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-black/95 border border-red-900 rounded-2xl p-6 shadow-lg flex items-center justify-center">
          <h2 className="text-2xl font-metal text-red-500 text-center">
            {band.name}
          </h2>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-black/90 border border-red-900 rounded-2xl p-6 shadow-lg overflow-y-auto relative">
          {/* Creator username top right */}
          <span className="absolute top-2 right-3 text-xs text-gray-400 italic">
            Created by: {band.createdBy?.username || "unknown"}
          </span>

          <h2 className="text-2xl font-metal text-red-500 mb-2">{band.name}</h2>
          <p className="text-gray-300 mb-1">
            <span className="font-semibold">Genre:</span> {band.genre}
          </p>
          <p className="text-gray-300 mb-1">
            <span className="font-semibold">Country:</span> {band.country}
          </p>
          <p className="text-gray-300 mb-1">
            <span className="font-semibold">Formed:</span> {band.formationYear}
          </p>
          <div className="text-gray-300">
            <span className="font-semibold">Members:</span>
            {band.members.length > 0 ? (
              <ul className="list-disc list-inside ml-4 mt-1">
                {band.members.map((member, idx) => (
                  <li key={idx}>{member}</li>
                ))}
              </ul>
            ) : (
              <span> No members listed</span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default BandCard;
