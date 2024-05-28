//We need normal bubbles and locked bubbles based on levels
//if level done, other level unlocked
//if level not completed, then level cannot be unlocked --> progress bar?
// src/components/LevelBubble.jsx
// src/components/LevelBubble.jsx
import React from "react";
import LockIcon from "../assets/lock-icon.png"; // Corrected the folder name

function LevelBubble({ fishImage, isLocked }) {
  return (
    <div className="relative inline-block">
      <img src={fishImage} alt="Fish" className="w-24 h-24" />
      {isLocked && (
        <img
          src={LockIcon}
          alt="Locked"
          className="absolute top-1 right-1 w-5 h-5"
        />
      )}
    </div>
  );
}

export default LevelBubble;
