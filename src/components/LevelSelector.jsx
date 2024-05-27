import React from "react";
import Navbar from "./Navbar";
import LevelBubble from "./LevelBubble";

function LevelSelector() {
    //here we can add more levels or tuna :P
  const levels = [
    { id: 1, fishImage: "/assets/yellow_fish.jpg", isLocked: false },
    { id: 2, fishImage: "/assets/purple_fish.jpg", isLocked: true },
    
  ];

  return (
    <div className="level-selector">
      <Navbar />
      {levels.map((level) => (
        <LevelBubble
          key={level.id}
          fishImage={level.fishImage}
          isLocked={level.isLocked}
        />
      ))}
    </div>
  );
}

export default LevelSelector;
