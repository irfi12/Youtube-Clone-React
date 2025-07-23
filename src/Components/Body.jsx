import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../src/Components/Sidebar';
import { useSelector } from 'react-redux';

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className='flex bg-black '>
      <Sidebar />
      <div className={`overflow-y-auto h-[calc(100vh-5.5rem)] custom-scroll ${isMenuOpen ? 'w-[calc(100%-15rem)]' : 'w-[calc(100%-6rem)]'} transition-all duration-300`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;