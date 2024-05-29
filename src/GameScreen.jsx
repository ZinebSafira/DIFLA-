import React from "react";
import "./GameScreen.css";
import Slider from "./components/Slider.jsx";
import CorrectPrompt from "./components/CorrectPrompt.jsx";

function GameScreen({
  title,
  sliderData,
  showSliderTitles,
  useLetterCardStyling,
}) {
  return (
    <div className="game-screen">
      <h1 className="title">{title}</h1>
      <Slider
        cardsData={sliderData}
        showTitles={showSliderTitles}
        useLetterCardStyling={useLetterCardStyling} // Specify true or false here
      />
      <CorrectPrompt />
    </div>
  );
}

export default GameScreen;
