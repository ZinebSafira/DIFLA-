import React from "react";
import ArrowIcon from "../assets/ArrowRightOutline.png"; // Ensure this path is correct
import UserAvatar from "../assets/user-avatar.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={ArrowIcon} alt="Back" className="w-6 h-6" />
      </div>
      <div className="nav-right">
        Hello, Zineb
        <img src={UserAvatar} alt="User Avatar" className="w-8 h-8" />
      </div>
    </div>
  );
}

export default Navbar;
