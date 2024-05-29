import ArrowIcon from "../assets/ArrowRightOutline.png";
import UserAvatar from "../assets/user-avatar.png"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-opacity-70 text-black font-bold">
      <div className="flex items-center">
        <img src={ArrowIcon} alt="Back" className="w-6 h-6" />
      </div>
      <div className="flex items-center text-xl">
        <p>Hello, Zineb</p> 
        <img src={UserAvatar} alt="User Avatar" className="w-8 h-8 rounded-full ml-2" />
      </div>
    </div>
  );
}

export default Navbar;