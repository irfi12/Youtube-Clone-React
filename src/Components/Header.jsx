import React, { useState } from "react";
import { Search, Menu, Mic, Bell, PlusIcon } from "lucide-react";
import Youtube_icon from "../../src/assets/Youtube_icon.png";
import my_image from "../../src/assets/my_image.PNG";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { filterVideos } from "../utils/videoSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(filterVideos(query));
  };

  return (
    <div className="relative grid grid-flow-col justify-between items-center bg-black p-6">
      <div className="flex items-center space-x-1 relative">
        <Menu
          onClick={() => dispatch(toggleMenu())}
          size={45}
          color="gray"
          className="cursor-pointer hover:bg-[#27272a] rounded-full py-2 "
        />
        <Link to='/'>
          <img
            src={Youtube_icon}
            alt="youtube-icon"
            className="h-10 w-16 cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex items-center">
        <div className="border-1 w-[38rem] rounded-l-full flex justify-between p-5 py-2 border-[#27272a]">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="border-none outline-none w-[40rem] text-white bg-black"
          />
        </div>
        <button className="bg-[#27272a] cursor-pointer rounded-r-full py-2 px-7">
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

