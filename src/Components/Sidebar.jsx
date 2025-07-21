import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import home from '../assets/home.png';
import person from '../assets/person.png';
import subscription from '../assets/subscription.png';
import short_videos from '../assets/short_videos.png';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);


  if (!isMenuOpen) return null;
  return (
    <div className='min-h-screen' >
      <ul className="flex flex-col items-center w-[6rem] mt-5">
        <li className='flex flex-col items-center text-sm text-white hover:bg-[#27272a] rounded-2xl py-3 cursor-pointer w-[5rem]'>
          <img src={home} alt="home-icon" className='w-6 h-6 mb-2' />
          Home
        </li>
        <li className='flex flex-col items-center text-sm text-white hover:bg-[#27272a] rounded-2xl px-4 py-3 cursor-pointer w-[5rem]'>
          <img src={short_videos} alt="short-videos-icon" className='w-6 h-6 mb-2' />
          Shorts
        </li>
        <li className='flex flex-col items-center text-sm text-white hover:bg-[#27272a] rounded-2xl px-4 py-3 cursor-pointer w-[5.5rem]'>
          <img src={subscription} alt="subscription-icon" className='w-6 h-6 mb-2' />
          Subscriptions
        </li>
        <li className='flex flex-col items-center text-sm text-white hover:bg-[#27272a] rounded-2xl px-4 py-3 cursor-pointer w-[5rem]'>
          <img src={person} alt="person-icon" className='w-6 h-6 mb-2' />
          You
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
