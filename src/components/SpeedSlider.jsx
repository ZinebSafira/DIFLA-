import React from "react";
import "./SpeedSlider.css";

function SpeedSlider() {
  const handleSpeedChange = (event) => {
    const speed = event.target.value;
    let speedText;
    switch (parseInt(speed)) {
      case 1:
        speedText = "Slowest";
        break;
      case 2:
      case 3:
        speedText = "Slower";
        break;
      case 4:
      case 5:
      case 6:
        speedText = "Slow";
        break;
      case 7:
      case 8:
      case 9:
      case 10:
        speedText = "Medium";
        break;
      case 11:
      case 12:
      case 13:
        speedText = "Fast";
        break;
      default:
        speedText = "Unknown";
    }
    console.log(speedText, speed);
  };

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
          onChange={handleSpeedChange}
        />
      </div>
    </>
  );
}

export default SpeedSlider;
