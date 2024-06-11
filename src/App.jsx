import React, { useState } from "react";
import GameScreen from "./GameScreen.jsx";

const wordCards = [
  { title: "Raam", image: "/public/raam.png" },
  { title: "Kaas", image: "/public/cheese.png" },
  { title: "Kip", image: "/public/chicken.png" },
  { title: "Vis", image: "/public/fish.png" },
  { title: "Aap", image: "/public/monkey.png" },
  { title: "Kaak", image: "/public/jaw.png" },
  { title: "Mik", image: "/public/raak.png" },
  { title: "Mes", image: "/public/knife.png" },
  { title: "Vaas", image: "/public/vase.png" },
  { title: "Vaar", image: "/public/vaar.png" },
  { title: "Aas", image: "/public/bait.png" },
];

const letterCards = [];
const letters = [
  "a",
  "aa",
  "e",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "z",
];

letters.forEach((letter) => {
  letterCards.push({ title: letter, image: `/public/letters/${letter}.png` });
});

function App() {
  return (
    <div>
      {/* <GameScreen
        title="Choose the next word"
        sliderData={wordCards}
        showSliderTitles={true}
        useLetterCardStyling={false}
        showSpeedSlider={false}
        showLiveView={false}
        
      /> */}

      <GameScreen
        title="Choose the next letter"
        sliderData={letterCards}
        showSliderTitles={false}
        useLetterCardStyling={true}
        showSpeedSlider={true}
        showLiveView={true}
      />
    </div>
  );
}

export default App;
