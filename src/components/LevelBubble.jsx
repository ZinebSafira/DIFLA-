
//We need normal bubbles and locked bubbles based on levels
//if level done, other level unlocked
//if level not completed, then level cannot be unlocked --> progress bar?
// src/components/LevelBubble.jsx
import React from "react";

function LevelBubble({ fishImage, isLocked }) {
  return (
    <div className="level-bubble">
      <img
        src={fishImage}
        alt="Fish"
        style={{ width: "100px", height: "100px" }}
      />
      {isLocked && (
        <img
          src="/assets/lock-icon.png"
          alt="Locked"
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            width: "20px",
            height: "20px",
          }}
        />
      )}
    </div>
  );
}

export default LevelBubble;
