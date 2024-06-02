import PropTypes from "prop-types";
import LockIcon from "../assets/lock-icon.png";
import React from "react";

const LevelBubble = ({ fishImage, isLocked, style, levelId, onClick }) => {
  const handleClick = () => {
    if (!isLocked) {
      onClick(levelId);
    }
  };

  return (
    <div className="level-bubble" style={style} onClick={handleClick}>
      <img src={fishImage} alt="Fish" />
      {isLocked && (
        <img
          src={LockIcon}
          alt="Locked"
          className="absolute top-[-2rem] left-24 w-12 h-5"
        />
      )}
    </div>
  );
};

LevelBubble.propTypes = {
  fishImage: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
  style: PropTypes.object,
  levelId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LevelBubble;
