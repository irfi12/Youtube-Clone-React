import React from 'react'
import Sidebar from '../../src/Components/Sidebar';
import Main_Container from '../../src/Components/Main_Container';

const Body = () => {
  return (
    <div className='flex h-screen bg-black'>
      <Sidebar/>
      <Main_Container/>
    </div>
  )
}

export default Body;
