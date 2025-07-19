import React, { useState } from "react";
import { Search, Menu, Mic, Bell, PlusIcon } from "lucide-react";
import Youtube_icon from "../../src/assets/Youtube_icon.webp";
import my_image from "../../src/assets/my_image.PNG";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import home from '../assets/home.png';
import subscription from '../assets/subscription.png';
import short_videos from '../assets/short_videos.png';
import Menu_List from "./Menu_List";

// Basically its menu items in when we toggle it on or off
const menuItems = [
  { logo: home, name: "Home" },
  { logo: short_videos, name: "Short" },
  { logo: subscription, name: "Subscriptions" },
  { logo: subscription, name: "Subscriptions" },
  { logo: subscription, name: "Subscriptions" },
  { logo: subscription, name: "Subscriptions" },
  { logo: subscription, name: "Subscriptions" },
  { logo: subscription, name: "Subscriptions" },
  { logo: subscription, name: "Subscriptions" },
  { logo: subscription, name: "Subscriptions" },
  { logo: subscription, name: "Subscriptions" },
  { logo: subscription, name: "Subscriptions" },
 
];



const Header = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative grid grid-flow-col justify-between items-center bg-black">
      <div className="flex items-center space-x-1 relative">
        <Menu
          onClick={toggleMenuHandler}
          size={45}
          color="gray"
          className="cursor-pointer hover:bg-[#27272a] rounded-full py-2 ml-8"
        />

        {/*Dropdown menu under hamburger icon */}
        {showDropdown && (
          <div className="absolute top-[4.5rem]  text-white rounded-md min-h-screen w-50 z-50 mt-19 bg-black">
            <Menu_List items={menuItems} />
           
          </div>
        )}

        <img
          src={Youtube_icon}
          alt="youtube-icon"
          className="h-[7.5rem] w-24 cursor-pointer"
        />
      </div>

      <div className="flex items-center">
        <div className="border-1 w-[38rem] rounded-l-full flex justify-between px-3 py-3 border-[#27272a]">
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none w-[40rem] text-white bg-black"
          />
        </div>
        <button className="bg-[#27272a] cursor-pointer rounded-r-full py-3 px-7">
          <Search size={26} color="white" />
        </button>
        <button className="ml-4 rounded-full p-3 bg-[#27272a] hover:bg-[#404040] cursor-pointer">
          <Mic size={28} color="white" />
        </button>
      </div>

      <div className="flex items-center space-x-5 mr-8">
        <div className="space-x-2 flex items-center text-white cursor-pointer bg-[#27272a] hover:bg-[#404040] py-3 px-4 rounded-full text-center">
          <PlusIcon />
          <span className="text-xl">Create</span>
        </div>
        <Bell size={33} color="white" className="cursor-pointer" />
        <img
          src={my_image}
          alt="my image"
          className="w-10 h-10 rounded-full border-3xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
