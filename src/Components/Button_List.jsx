import React from 'react'

const buttons =[
  {name :"Music"},
  {name :"PlayList"},
  {name :"JavaScript"},
  {name :"Live"},
  {name :"React"},
  {name :"Exam"},
  {name :"Questions"},
];
const Button_List = () => {
  return (
    <div className='bg-black h-screen text-white space-x-3 '>
      <button className='bg-gray-300 text-black px-4 py-2 rounded space-x-4'>ALL</button>
      {
        buttons.map((item)=>(
          <button key={item.name} className='bg-[#27272a] px-4 py-2 rounded gap-5'>{item.name}</button>
         
        )
      )
      }
   
    </div>
  )
}

export default Button_List