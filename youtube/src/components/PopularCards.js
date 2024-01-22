import React, { useEffect, useState } from 'react'
import { YOUTUBE_POPULAR_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';

const PopularCards = () => {
  const [popvideo,setPopVideo] = useState();
  useEffect(()=>{
    apiCall();
  },[])

  const apiCall = async ()=>{
    const data =await fetch(YOUTUBE_POPULAR_VIDEO_API);
    const json =await data.json();
    setPopVideo(json.items)
  }

  return (
    <div className='flex flex-wrap gap-4 overflow-hidden' >
      {
        popvideo?.map((x)=> <VideoCard videoInfo={x} />)
      }
    </div>
  )
}

export default PopularCards