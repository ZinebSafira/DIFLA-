import React from "react";
import LockIcon from "../assets/lock-icon.png";

function LevelBubble({ fishImage, isLocked, style, levelId, onClick }) {
  const handleClick = () => {
    if (!isLocked) {
      onClick(levelId);
    }
  };

  return (
    <div className="level-bubble" style={style} onClick={handleClick}>
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
