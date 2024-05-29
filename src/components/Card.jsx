import React from "react";
import "./Card.css";

function Card({
  image,
  title,
  isSelected,
  onClick,
  showTitle,
  useLetterCardStyling,
  selectedClassName, // New prop for the selected class name
}) {
  const cardClass = useLetterCardStyling ? "letter-card" : "card";
  const selectedClass = isSelected ? "letter-card-selected" : "";

  return (
    <div className={`${cardClass} ${selectedClass}`} onClick={onClick}>
      <img src={image} alt={title} />
      {showTitle && <p className="card-title">{title}</p>}
    </div>
  );
}

export default Card;
