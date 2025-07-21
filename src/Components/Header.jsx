import React, { useState } from "react";
import { Search, Menu, Mic, Bell, PlusIcon } from "lucide-react";
import Youtube_icon from "../../src/assets/Youtube_icon.png";
import my_image from "../../src/assets/my_image.PNG";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import home from '../assets/home.png';
import subscription from '../assets/subscription.png';
import short_videos from '../assets/short_videos.png';
import courses from '../assets/courses.png';
import cut from '../assets/cut.png';
import feedback from '../assets/feedback.png';
import gaming from '../assets/gaming.png';
import help from '../assets/help.png';
import history from '../assets/history.png';
import like from '../assets/like.png';
import music from '../assets/music.png';
import newspaper from '../assets/newspaper.png';
import report from '../assets/report.png';
import trending from '../assets/trending.png';
import trophy from '../assets/trophy.png';
import videos from '../assets/videos.png';
import watch_later from '../assets/watch_later.png';
import setting from '../assets/setting.png';
import app from '../assets/app.png';
import youtube_studio from '../assets/youtube-studio.png';
import youtube_kids from '../assets/youtube-kids.png';
import youtube_premimum from '../assets/youtube_premimum.png';
import Menu_List from "./Menu_List";

// Basically its menu items in when we toggle it on or off
const menuItems = [
  { logo: home, name: "Home" },
  { logo: short_videos, name: "Short" },
  { logo: subscription, name: "Subscription" },
  { logo: history, name: "History" },
  { logo: music, name: "Playlists" },
  { logo: videos, name: "Your videos" },
  { logo: courses, name: "Your courses" },
  { logo: watch_later, name: "Watch later" },
  { logo: like, name: "Liked videos" },
  { logo: cut, name: "Your clips" },
  { logo: my_image, name: "irfan" },
  { logo: my_image, name: "irfan" },
  { logo: trending, name: "Trending" },
  { logo: music, name: "Musics" },
  { logo: gaming, name: "Gaming" },
  { logo: newspaper, name: "News" },
  { logo: trophy, name: "Sports" },
  { logo: youtube_premimum, name: "YouTube Premimum" },
  { logo: youtube_studio, name: "YouTube Studio" },
  { logo: app, name: "YouTube Music" },
  { logo: youtube_kids, name: "YouTube Kids" },
  { logo: setting, name: "Setting" },
  { logo: report, name: "Report History" },
  { logo: help, name: "help" },
  { logo: feedback, name: "Send feedback" },
  
  
 
 
];



const Header = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative grid grid-flow-col justify-between items-center bg-black  p-6">
      <div className="flex items-center space-x-1 relative">
        <Menu
          onClick={toggleMenuHandler}
          size={45}
          color="gray"
          className="cursor-pointer hover:bg-[#27272a] rounded-full py-2 "
        />

        {/*Dropdown menu under hamburger icon */}
        {showDropdown && (
          <div className="absolute top-[5.7rem] left-[-1rem] text-white rounded-md min-h-screen z-auto bg-black">
            <Menu_List items={menuItems} />
           
          </div>
        )}

        <img
          src={Youtube_icon}
          alt="youtube-icon"
          className="h-10 w-15 cursor-pointer"
        />
      </div>

      <div className="flex items-center">
        <div className="border-1 w-[38rem] rounded-l-full flex justify-between p-5 py-2 border-[#27272a]">
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none w-[40rem] text-white bg-black"
          />
        </div>
        <button className="bg-[#27272a] cursor-pointer rounded-r-full py-2  px-7">
          <Search size={26} color="white" />
        </button>
        <button className="ml-4 rounded-full p-2 bg-[#27272a] hover:bg-[#404040] cursor-pointer">
          <Mic size={26} color="white" />
        </button>
      </div>

      <div className="flex items-center space-x-5">
        <div className="space-x-2 flex items-center text-white cursor-pointer bg-[#27272a] hover:bg-[#404040] py-2 px-3 rounded-full text-center">
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
