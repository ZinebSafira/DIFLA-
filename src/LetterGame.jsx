import React from "react";
import "./LetterGame.css";

import Card from "./components/Card";
import Profilebox from "./components/ProfileBox.jsx";

function LetterGame() {
  return (
    <>
      <Profilebox />
      <img
        className="fallingcard"
        src="/public/letters/a.png"
        alt="falling card "
      />
    </>
  );
}

export default LetterGame;
