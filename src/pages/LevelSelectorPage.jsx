import React from "react";
import Navbar from "./Navbar";
import LevelSelector from "./LevelSelector";

function LevelSelectorPage() {
  const handleBubbleClick = (levelId) => {
    console.log(`Bubble for level ${levelId} clicked`);
    // Perform any other actions here, e.g., show a modal or change some state
  };

  return (
    <div className="App">
      <Navbar />
      <LevelSelector handleBubbleClick={handleBubbleClick} />
    </div>
  );
}

export default LevelSelectorPage;
