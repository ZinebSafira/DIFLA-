import React from "react";
import LevelBubble from "./LevelBubble";
import Navbar from "./Navbar";
import YellowFish from "../assets/yellow-fish.png";
import PurpleFish from "../assets/purple-fish.png";
import GrayFish from "../assets/gray-fish.png";
import GreenFish from "../assets/green-fish.png";
import DotsConnector from "./DotsConnector";

const LevelSelector = () => {
  const levels = [
    {
      id: 1,
      fishImage: YellowFish,
      isLocked: false,
      style: { top: "30vh", left: "5vw" },
    },
    {
      id: 2,
      fishImage: PurpleFish,
      isLocked: false,
      style: { top: "40vh", left: "35vw" },
    },
    {
      id: 3,
      fishImage: GrayFish,
      isLocked: true,
      style: { top: "30vh", left: "55vw" },
    },
    {
      id: 4,
      fishImage: GreenFish,
      isLocked: false,
      style: { top: "50vh", left: "70vw" },
    },
  ];

  const handleBubbleClick = (levelId) => {
    console.log(`Bubble for level ${levelId} clicked`);
    // Perform any other actions here, e.g., show a modal or change some state
  };

  return (
    <div className="relative w-screen h-screen bg-cover bg-no-repeat overflow-hidden" style={{ backgroundImage: `url("../assets/underwater-background.png")` }}>
      <Navbar />
      <div className="relative w-full h-full">
        {levels.map((level, index) => (
          <React.Fragment key={level.id}>
            {index < levels.length - 1 && (
              <DotsConnector
                start={{
                  top: parseFloat(level.style.top.replace("vh", "")) * window.innerHeight / 100,
                  left: parseFloat(level.style.left.replace("vw", "")) * window.innerWidth / 100,
                }}
                end={{
                  top: parseFloat(levels[index + 1].style.top.replace("vh", "")) * window.innerHeight / 100,
                  left: parseFloat(levels[index + 1].style.left.replace("vw", "")) * window.innerWidth / 100,
                }}
              />
            )}
            <LevelBubble
              fishImage={level.fishImage}
              isLocked={level.isLocked}
              style={{ top: `calc(${level.style.top} - 50px)`, left: `calc(${level.style.left} - 50px)`, zIndex: 2 }}
              levelId={level.id}
              onClick={handleBubbleClick}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;