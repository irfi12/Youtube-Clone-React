import React, { useEffect , useState} from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import Video_cards from './Video_cards';
import { motion } from "framer-motion";

const Video_Container = () => {

  const [videos , setVideos]=useState([])

useEffect(()=>{
  getVideo();
},[]);

const getVideo=async()=>{
  const data=await fetch(YOUTUBE_VIDEOS_API);
  const json= await data.json();
  setVideos(json.items )
}
  return (
    
    <div className='flex gap-4 flex-wrap h-200'>
      {
        videos.map(video=> <Video_cards key={video.id} info={video}/>)
      }
  
     
    </div>
  )
}

export default Video_Container
