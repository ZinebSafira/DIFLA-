import React, { useState } from "react";
import "./Slider.css";
import Card from "./Card.jsx";

const Slider = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsData = [
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
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          isSelected={selectedCard === card.title}
          onClick={() => handleCardClick(card.title)}
        />
      ))}
    </div>
  );
};

export default Slider;
