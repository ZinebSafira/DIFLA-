import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LockIcon from "../assets/lock-icon.png";

function LevelBubble({ fishImage, isLocked, style, levelId, onClick }) {
  const bubbleRef = useRef(null);

  useEffect(() => {
    gsap.to(bubbleRef.current, {
      y: "+=20",
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  const handleClick = () => {
    if (!isLocked) {
      onClick(levelId);
    }
  };

  return (
    <div
      ref={bubbleRef}
      className="level-bubble"
      style={style}
      onClick={handleClick}>
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
