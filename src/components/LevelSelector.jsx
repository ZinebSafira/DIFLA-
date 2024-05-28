// src/components/LevelSelector.jsx
import React from "react";
import LevelBubble from "./LevelBubble";
import Navbar from "./Navbar";
import YellowFish from "../assets/yellow-fish.png"
import PuprleFish from "../assets/purple-fish.png"
import GrayFish from "../assets/gray-fish.png"
import GreenFish from "../assets/green-fish.png"


function LevelSelector() {
  const levels = [
    { id: 1, fishImage: YellowFish , isLocked: false },
    { id: 2, fishImage: PuprleFish, isLocked: false },
    { id: 3, fishImage: GrayFish, isLocked: true },
    { id: 4, fishImage: GreenFish, isLocked: false },
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
