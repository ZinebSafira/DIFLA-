import React, { useState } from "react";
import "./Slider.css";
import Card from "./Card.jsx";

const Slider = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (title) => {
    if (selectedCard === title) {
      setSelectedCard(null);
      console.log(`${title} is deselected`);
    } else {
      if (selectedCard) {
        console.log(`${selectedCard} is deselected`);
      }
      setSelectedCard(title);
      console.log(`${title} is selected`);
    }
  };

  return (
    <div className="slider">
      <Card
        image="/public/window.png"
        title="Window"
        isSelected={selectedCard === "Window"}
        onClick={() => handleCardClick("Window")}
      />
      <Card
        image="/public/cheese.png"
        title="Cheese"
        isSelected={selectedCard === "Cheese"}
        onClick={() => handleCardClick("Cheese")}
      />
      <Card
        image="/public/chicken.png"
        title="Chicken"
        isSelected={selectedCard === "Chicken"}
        onClick={() => handleCardClick("Chicken")}
      />
      <Card
        image="/public/fish.png"
        title="Fish"
        isSelected={selectedCard === "Fish"}
        onClick={() => handleCardClick("Fish")}
      />
      <Card
        image="/public/monkey.png"
        title="Monkey"
        isSelected={selectedCard === "Monkey"}
        onClick={() => handleCardClick("Monkey")}
      />
      <Card
        image="/public/jaw.png"
        title="Jaw"
        isSelected={selectedCard === "Jaw"}
        onClick={() => handleCardClick("Jaw")}
      />
      <Card
        image="/public/window.png"
        title="Window"
        isSelected={selectedCard === "Window"}
        onClick={() => handleCardClick("Window")}
      />
      <Card
        image="/public/cheese.png"
        title="Cheese"
        isSelected={selectedCard === "Cheese"}
        onClick={() => handleCardClick("Cheese")}
      />
      <Card
        image="/public/chicken.png"
        title="Chicken"
        isSelected={selectedCard === "Chicken"}
        onClick={() => handleCardClick("Chicken")}
      />
      <Card
        image="/public/fish.png"
        title="Fish"
        isSelected={selectedCard === "Fish"}
        onClick={() => handleCardClick("Fish")}
      />
      <Card
        image="/public/weird.png"
        title="Weird"
        isSelected={selectedCard === "Weird"}
        onClick={() => handleCardClick("Weird")}
      />
      <Card
        image="/public/jaw.png"
        title="Jaw"
        isSelected={selectedCard === "Jaw"}
        onClick={() => handleCardClick("Jaw")}
      />
    </div>
  );
};

export default Slider;
