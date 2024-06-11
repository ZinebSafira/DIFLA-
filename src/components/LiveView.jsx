import React, { useState, useEffect } from "react";
import "./LiveView.css";

const LiveView = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="livebox">
      <div className="timeleft">{time} s Left</div>
      <div className="livecard">
        <img src="/public/letters/a.png" alt="" />
      </div>
    </div>
  );
};

export default LiveView;
