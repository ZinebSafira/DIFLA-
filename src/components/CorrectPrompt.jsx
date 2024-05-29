import React from "react";
import "./CorrectPrompt.css";

function CorrectPrompt() {
  return (
    <div className="correct-prompt">
      <h2>Was it correct?</h2>
      <div className="buttoncontainer">
        <button className="correct">Yes</button>
        <button className="incorrect">No</button>
      </div>
    </div>
  );
}

export default CorrectPrompt;
