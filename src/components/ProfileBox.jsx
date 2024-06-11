import React from "react";
import "./ProfileBox.css";

function Profilebox() {
  return (
    <>
      <div className="icon">
        <img
          className="profilepic"
          src="/public/profilepic/turtle.png"
          alt="turtle image"
        />
      </div>
      <div className="name-and-score">
        <h1 className="name">Name</h1>
        {/* score here */}
      </div>
    </>
  );
}

export default Profilebox;
