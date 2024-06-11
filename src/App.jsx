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

const letterCards = [
  { title: "a", image: "/public/letters/a.png" },
  { title: "aa", image: "/public/letters/aa.png" },
  { title: "e", image: "/public/letters/e.png" },
  { title: "g", image: "/public/letters/g.png" },
  { title: "h", image: "/public/letters/h.png" },
  { title: "i", image: "/public/letters/i.png" },
  { title: "j", image: "/public/letters/j.png" },
  { title: "k", image: "/public/letters/k.png" },
  { title: "l", image: "/public/letters/l.png" },
  { title: "m", image: "/public/letters/m.png" },
  { title: "n", image: "/public/letters/n.png" },
  { title: "o", image: "/public/letters/o.png" },
  { title: "p", image: "/public/letters/p.png" },
  { title: "r", image: "/public/letters/r.png" },
  { title: "s", image: "/public/letters/s.png" },
  { title: "t", image: "/public/letters/t.png" },
  { title: "u", image: "/public/letters/u.png" },
  { title: "v", image: "/public/letters/v.png" },
  { title: "w", image: "/public/letters/w.png" },
  { title: "z", image: "/public/letters/z.png" },
];

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
