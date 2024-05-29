import PropTypes from "prop-types";

const DotsConnector = ({ start, end }) => {
  const deltaX = end.left - start.left;
  const deltaY = end.top - start.top;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  const numberOfDots = Math.floor(distance / 30);
  const dots = [];

  for (let i = 0; i <= numberOfDots; i++) {
    const left = start.left + (deltaX / numberOfDots) * i;
    const top = start.top + (deltaY / numberOfDots) * i;
    dots.push(
      <div
        key={i}
        className="absolute w-3 h-3 bg-white rounded-full"
        style={{ left: `${left}px`, top: `${top}px` }}
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
