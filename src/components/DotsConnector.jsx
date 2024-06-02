import PropTypes from "prop-types";
import React from "react";
import "../pages/LevelSelector.css";

const DotsConnector = ({ start, end }) => {
  const deltaX = end.left - start.left;
  const deltaY = end.top - start.top;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  const numberOfDots = Math.floor(distance / 30); // Adjust the spacing as needed
  const dots = [];
  const fadeStartIndex = Math.floor(numberOfDots * 0.7); // 70% of the dots will be normal, the rest will fade

  for (let i = 0; i <= numberOfDots; i++) {
    const left = start.left + (deltaX / numberOfDots) * i;
    const top = start.top + (deltaY / numberOfDots) * i;
    const opacity =
      i < fadeStartIndex
        ? 0.8
        : 0.8 * (1 - (i - fadeStartIndex) / (numberOfDots - fadeStartIndex));

    dots.push(
      <div
        key={i}
        className="dot"
        style={{ left: `${left}px`, top: `${top}px`, opacity }}
      />
    );
  }

  return (
    <div
      className="absolute"
      style={{
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}>
      {dots}
    </div>
  );
};

DotsConnector.propTypes = {
  start: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
  }).isRequired,
  end: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
  }).isRequired,
};

export default DotsConnector;
