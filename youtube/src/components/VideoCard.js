import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({videoInfo}) => {
    if(!videoInfo)
        return ;
  return (
    <Link to={"watch?v="+videoInfo.id+"&c="+videoInfo?.snippet.channelId}  >
    <div key={videoInfo.id} className='flex w-64 flex-col' >
        <div>
            <img  className='rounded-xl '  src={videoInfo?.snippet?.thumbnails?.medium?.url}  />
        </div>
        <div>
            <h1 className='text-[14px] font-semibold truncate' >{videoInfo?.snippet?.title}</h1>
        </div>
        <div>
            <h2 className='text-xs' >{videoInfo?.snippet?.channelTitle}</h2>
        </div>
        <div className='flex gap-3'>
            <h2 className='text-xs' >{videoInfo?.statistics?.viewCount/1000} views</h2>
            <h2 className='text-xs' >{videoInfo?.statistics?.likeCount} likes</h2>
        </div>
    </div>
    </Link>
  )
}

export default VideoCard