// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      Hello, Zineb{" "}
      <img
        src="/assets/user-avatar.png"
        alt="User Avatar"
        style={{ width: "30px", height: "30px", borderRadius: "50%" }}
      />
    </div>
  );
}

export default Navbar;
