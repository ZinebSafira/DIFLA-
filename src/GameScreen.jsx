import React from "react";
import "./GameScreen.css";
import Slider from "./components/Slider.jsx";
import CorrectPrompt from "./components/CorrectPrompt.jsx";
import SpeedSlider from "./components/SpeedSlider.jsx";
import LiveView from "./components/LiveView.jsx";

function GameScreen({
  title,
  sliderData,
  showSliderTitles,
  useLetterCardStyling,
  showSpeedSlider,
  showLiveView,
}) {
  return (
    <div className="game-screen">
      <h1 className="title">{title}</h1>
      <Slider
        cardsData={sliderData}
        showTitles={showSliderTitles}
        useLetterCardStyling={useLetterCardStyling}
      />
      {showSpeedSlider && <SpeedSlider />}
      {showLiveView && <LiveView />}
      <CorrectPrompt />
    </div>
  );
}

export default GameScreen;
