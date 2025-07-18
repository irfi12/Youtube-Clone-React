import React from 'react'
import home from '../../src/assets/home.png'
import person from '../../src/assets/person.png'
import subscription from '../../src/assets/subscription.png'
import short_videos from '../../src/assets/short_videos.png'

const Sidebar = () => {

  return (
    <div>
      <ul className=' flex flex-col items-center space-y-2 bg-black w-33'>
            <li className='flex flex-col items-center text-sm text-white bg-transparent hover:bg-gray-300 rounded-2xl px-4 py-3 cursor-pointer'>
                  <img src={home} alt="home-icon" className='w-8 h-8 mb-3 ' />Home</li>
            <li className='flex flex-col items-center text-sm text-white bg-transparent hover:bg-gray-300 rounded-2xl px-4 py-3 cursor-pointer'>
                 <img src={short_videos} alt="short-videos-icon" className='w-8 h-8 mb-3' />Short Videos</li>
            <li className='flex flex-col items-center text-sm text-white bg-transparent hover:bg-gray-300 rounded-2xl px-4 py-3 cursor-pointer'> 
                   <img src={subscription} alt="subsciption-icon" className='w-8 h-8 mb-3' />Subscriptions</li>
            <li className='flex flex-col items-center text-sm text-white bg-transparent hover:bg-gray-300 rounded-2xl px-4 py-3 cursor-pointer'>
                <img src={person} alt="person-icon" className='w-8 h-8 mb-3' />You</li>
      </ul>
    </div>
  )
}

export default Sidebar;
