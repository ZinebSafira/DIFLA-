import React from "react";
import "./GameScreen.css";
import Slider from "./components/Slider.jsx";

const GameScreen = () => {
  return (
    <div className="game-screen">
      <h1 className="title">Choose the next word</h1>

      <Slider />
    </div>
  );
};

export default GameScreen;
