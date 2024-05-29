import React from "react";
import "./GameScreen.css";
import Slider from "./components/Slider.jsx";
import CorrectPrompt from "./components/CorrectPrompt.jsx";

const GameScreen = ({ title, sliderData, showSliderTitles }) => {
  return (
    <div className="game-screen">
      <h1 className="title">{title}</h1>
      <Slider cardsData={sliderData} showTitles={showSliderTitles} />
      <CorrectPrompt />
    </div>
  );
};

export default GameScreen;
