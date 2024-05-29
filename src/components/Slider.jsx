import React, { useState } from "react";
import "./Slider.css";
import Card from "./Card.jsx";

function Slider({ cardsData, showTitles = true, useLetterCardStyling }) {
  // Include useLetterCardStyling as a parameter
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
          useLetterCardStyling={useLetterCardStyling} // Pass useLetterCardStyling prop to Card
        />
      ))}
    </div>
  );
}

export default Slider;
