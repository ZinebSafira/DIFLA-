import React from "react";
import LevelBubble from "./LevelBubble";
import YellowFish from "../assets/yellow-fish.png";
import PurpleFish from "../assets/purple-fish.png";
import GrayFish from "../assets/gray-fish.png";
import GreenFish from "../assets/green-fish.png";

function LevelSelector({ handleBubbleClick }) {
  const levels = [
    {
      id: 1,
      fishImage: YellowFish,
      isLocked: false,
      style: { top: "25%", left: "5%" },
    },
    {
      id: 2,
      fishImage: PurpleFish,
      isLocked: false,
      style: { top: "20%", left: "30%" },
    },
    {
      id: 3,
      fishImage: GrayFish,
      isLocked: true,
      style: { top: "40%", left: "55%" },
    },
    {
      id: 4,
      fishImage: GreenFish,
      isLocked: false,
      style: { top: "35%", left: "75%" },
    },
    {
      id: 5,
      fishImage: GreenFish,
      isLocked: false,
      style: { top: "70%", left: "85%" },
    },
  ];

  return (
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
      <div className="connecting-bubbles"></div>
    </div>
  );
}

export default LevelSelector;
