import React, { useState } from "react";
import "./Slider.css";
import Card from "./Card.jsx";

const Slider = ({ cardsData, showTitles = true }) => {
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
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          isSelected={selectedCard === card.title}
          onClick={() => handleCardClick(card.title)}
          showTitle={showTitles}
        />
      ))}
    </div>
  );
};

export default Slider;
