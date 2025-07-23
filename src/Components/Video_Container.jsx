import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import Video_cards from './Video_cards';
import { Link } from 'react-router-dom';
import { setAllVideos } from '../utils/videoSlice';

const Video_Container = () => {
  const dispatch = useDispatch();
  const { filteredVideos } = useSelector((state) => state.videos);

  useEffect(() => {
    const getVideo = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      dispatch(setAllVideos(json.items));
    };
    getVideo();
  }, [dispatch]);

  return (
    <div className='flex gap-4 flex-wrap'>
      {filteredVideos.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video.id}>
          <Video_cards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Video_Container;
