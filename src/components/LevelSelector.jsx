import React from "react";
import LevelBubble from "./LevelBubble";
import Navbar from "./Navbar";
import YellowFish from "../assets/yellow-fish.png";
import PurpleFish from "../assets/purple-fish.png";
import GrayFish from "../assets/gray-fish.png";
import GreenFish from "../assets/green-fish.png";

function LevelSelector() {
  const levels = [
    {
      id: 1,
      fishImage: YellowFish,
      isLocked: false,
      style: { top: "150px", left: "200px" },
    },
    {
      id: 2,
      fishImage: PurpleFish,
      isLocked: false,
      style: { top: "250px", left: "400px" },
    },
    {
      id: 3,
      fishImage: GrayFish,
      isLocked: true,
      style: { top: "350px", left: "600px" },
    },
    {
      id: 4,
      fishImage: GreenFish,
      isLocked: false,
      style: { top: "450px", left: "800px" },
    },
  ];

  const handleBubbleClick = (levelId) => {
    console.log(`Bubble for level ${levelId} clicked`);
    // Perform any other actions here, e.g., show a modal or change some state
  };

  return (
    <div className="App">
      <Navbar />
      <div className="levels-container">
        {levels.map((level) => (
          <LevelBubble
            key={level.id}
            fishImage={level.fishImage}
            isLocked={level.isLocked}
            style={level.style}
            levelId={level.id}
            onClick={handleBubbleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default LevelSelector;
