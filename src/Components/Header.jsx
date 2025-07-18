import React from "react";
import { Search, Menu, Mic, Bell , PlusIcon, Pointer, PointerIcon} from "lucide-react";
import Youtube_icon from "../../src/assets/Youtube_icon.png";
import my_image from "../../src/assets/my_image.PNG";



const Header = () => {
  return (
    <div className=" grid grid-flow-col p-1 justify-between items-center bg-black">
      <div className="flex items-center space-x-4">
        <Menu size={50} color="gray" className="cursor-pointer hover:bg-[#27272a]  rounded-full py-2 ml-8"/>
        <img src={Youtube_icon} alt="youtube-icon" className="h-27 w-26 cursor-pointer" />
      </div>
      <div className="flex items-center">
        <div className="border-1 w-[38rem] rounded-l-full flex justify-between px-3 py-2 border-[#27272a]">
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none text-white"
          />
        </div>

        <button className=" border-gray-500 bg-[#27272a] cursor-pointer rounded-r-full py-2 px-4">
          <Search size={25} color="white" />
        </button>

        <button className="ml-4  rounded-full p-2 bg-[#27272a]  hover:bg-[#404040] cursor-pointer  ">
          <Mic size={25} color="white" />
        </button>
      </div>
      <div className="flex items-center space-x-5 mr-8">
        <div className="space-x-2 flex  items-center text-white cursor-pointer bg-[#27272a]  hover:bg-[#404040] py-2 px-4 rounded-full text-center">
          <PlusIcon/>
          <span className="text-xl ">Create</span>
        </div>
        <Bell size={35} color="white" className="cursor-pointer" />
        <img
          src={my_image}
          alt="my image"
          className="w-10 h-10 rounded-full  border-3xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
