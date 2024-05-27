// src/components/LevelSelector.jsx
import React from "react";
import LevelBubble from "./LevelBubble";
import Navbar from "./Navbar";

function LevelSelector() {
  const levels = [
    { id: 1, fishImage: "/assets/yellow-fish.png", isLocked: false },
    { id: 2, fishImage: "/assets/purple-fish.png", isLocked: false },
    { id: 3, fishImage: "/assets/gray-fish.png", isLocked: true },
    { id: 4, fishImage: "/assets/green-fish.png", isLocked: false },
  ];

  return (
    <div className="level-selector">
      <Navbar />
      <div className="levels-container">
        {levels.map((level) => (
          <LevelBubble
            key={level.id}
            fishImage={level.fishImage}
            isLocked={level.isLocked}
          />
        ))}
      </div>
    </div>
  );
}

export default LevelSelector;
