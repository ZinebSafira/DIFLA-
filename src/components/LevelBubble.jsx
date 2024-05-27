import React from "react";

//We need normal bubbles and locked bubbles based on levels
//if level done, other level unlocked
//if level not completed, then level cannot be unlocked --> progress bar?
function LevelBubble({ fishImage, isLocked }) {
  return (
    <div className={`level-bubble ${isLocked ? "locked" : ""}`}>
      <img src={fishImage} alt="Fish" />
      {isLocked && <img src="/assets/lock_icon.png" alt="Locked" />}
    </div>
  );
}

export default LevelBubble;
