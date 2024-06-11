import React from "react";
import "./SpeedSlider.css";

function SpeedSlider() {
  return (
    <>
      <div className="speedslider">
        <div className="seperator">
          <label>Slow</label>
          <label>Medium</label>
          <label>Fast</label>
        </div>

        <input
          className="realslider"
          type="range"
          min="1"
          max="13"
          defaultValue="6"
          id="speed-slider"
        />
      </div>
    </>
  );
}

export default SpeedSlider;
