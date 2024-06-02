import React from "react";
import ArrowIcon from "../assets/ArrowRightOutline.png";
import UserAvatar from "../assets/user-avatar.png";

const Navbar = () => {
  const handleBackClick = () => {
    // Implement the logic to go back or navigate to the desired page
    console.log("Back arrow clicked");
  };

  const handleAvatarClick = () => {
    // Implement the logic to handle avatar click
    console.log("Avatar clicked");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-opacity-70 text-black font-bold">
      <div className="flex items-center">
        <button onClick={handleBackClick} className="focus:outline-none">
          <img src={ArrowIcon} alt="Back" className="w-8 h-8" />
        </button>
      </div>
      <div className="flex items-center text-xl">
        <p className="mr-2">Hello, Zineb</p>
        <button onClick={handleAvatarClick} className="focus:outline-none">
          <img
            src={UserAvatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
