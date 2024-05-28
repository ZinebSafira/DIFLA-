// src/components/Navbar.jsx
import React from "react";
import UserAvatar from "../assets/user-avatar.png"

function Navbar() {
  return (
    <div className="navbar">
      Hello, Zineb{" "}
      <img
        src= {UserAvatar}
        alt="User Avatar"
        style={{ width: "30px", height: "30px", borderRadius: "50%" }}
      />
    </div>
  );
}

export default Navbar;
