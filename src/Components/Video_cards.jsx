import React from 'react';

const Video_cards = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) {
    return null; 
  }

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount, likeCount } = statistics;

  return (
    <div className="w-[300px]  bg-transparent text-white rounded-lg shadow-md">
      <img
        src={thumbnails?.medium?.url}
        alt="video thumbnail"
        className="rounded-md w-full h-auto"
      />
    
      <h2 className="mt-2 text-lg text-white font-semibold">{title}</h2>
       
      <p className="text-sm bg-transparent">{channelTitle}</p>
       <div className='flex items-center '>
      <p className="text-sm bg-transparent">{Number(viewCount).toLocaleString()}</p>
      <p className="text-sm bg-transparent"> {Number(likeCount).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Video_cards;
