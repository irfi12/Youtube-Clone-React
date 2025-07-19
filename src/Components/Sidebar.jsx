import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import home from '../assets/home.png';
import person from '../assets/person.png';
import subscription from '../assets/subscription.png';
import short_videos from '../assets/short_videos.png';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [hovering, setHovering] = useState(false);

  if (!isMenuOpen) return null;

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`w-26 h-screen bg-black flex flex-col items-center 
        ${hovering ? 'overflow-y-auto' : 'overflow-hidden'} 
        custom-scroll`}
    >
      <ul className="flex flex-col items-center w-[5rem]">
        <li className='flex flex-col items-center text-sm text-white hover:bg-[#27272a] rounded-2xl py-3 cursor-pointer w-[6rem]'>
          <img src={home} alt="home-icon" className='w-6 h-6 mb-2' />
          Home
        </li>
        <li className='flex flex-col items-center text-sm text-white hover:bg-[#27272a] rounded-2xl px-4 py-3 cursor-pointer w-[6rem]'>
          <img src={short_videos} alt="short-videos-icon" className='w-6 h-6 mb-2' />
          Shorts
        </li>
        <li className='flex flex-col items-center text-sm text-white hover:bg-[#27272a] rounded-2xl px-4 py-3 cursor-pointer w-[6rem]'>
          <img src={subscription} alt="subscription-icon" className='w-6 h-6 mb-2' />
          Subscriptions
        </li>
        <li className='flex flex-col items-center text-sm text-white hover:bg-[#27272a] rounded-2xl px-4 py-3 cursor-pointer w-[6rem]'>
          <img src={person} alt="person-icon" className='w-6 h-6 mb-2' />
          You
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
