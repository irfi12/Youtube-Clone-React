import React from 'react';

const buttons =[
  {name :"Music"},
  {name :"PlayList"},
  {name :"JavaScript"},
  {name :"Live"},
  {name :"React"},
  {name :"Exam"},
  {name :"Quran"},
  {name :"University"},
  {name :"Data Structure"},
  {name :"Pass in Exam"},
];
const Button_List = () => {

  return (
    <div className='space-x-5 '>
      <button className='bg-gray-300 text-black px-4 py-1 rounded space-x-4 cursor-pointer'>ALL</button>
      {
        buttons.map((item)=>(
          <button key={item.name} className='bg-[#27272a] px-4 py-1 rounded gap-5 cursor-pointer'>{item.name}</button>
         
        )
      )
      }
   
    </div>
  )
}

export default Button_List