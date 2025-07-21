import React from 'react'
import Button_List from './Button_List'
import Video_Container from './Video_Container'
import { useSelector } from 'react-redux';

const Main_Container = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={`bg-black mt-6 ml-9 h-[50rem]: space-y-9 text-white space-x-3 ${!isMenuOpen ? 'ml-60 '  : ''} transition-all  duration-300`}>
      <Button_List/>
    
      <Video_Container/>
     
    </div>
  )
}

export default Main_Container
