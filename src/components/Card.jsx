import React from "react";
import "./Card.css";

const Card = ({ image, title, isSelected, onClick, showTitle }) => {
  return (
    <div className={`card ${isSelected ? "selected" : ""}`} onClick={onClick}>
      <img src={image} alt={title} />
      {showTitle && <p className="card-title">{title}</p>}
    </div>
  );
};

export default Card;
