import React from "react";
import LockIcon from "../assets/lock-icon.png";

function LevelBubble({ fishImage, isLocked, style }) {
  return (
    <div className="level-bubble" style={style}>
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
