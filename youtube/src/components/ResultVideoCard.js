import React from 'react'
import { Link } from 'react-router-dom';

const ResultVideoCard = ({card}) => {

  return (
    <Link to={'/watch?v='+card?.id.videoId+"&c="+card?.snippet.channelId} >
    <div className='flex gap-3 justify-start items-start mx-14 w-10/12' >
      <div className='flex justify-start items-start' >
        <div className='' >
            <img className='rounded-xl h-44' src={card?.snippet?.thumbnails?.medium?.url} />
        </div>
        <div className='w-1/2' >
            <h1>{card.snippet.title}</h1>
            <h1>{card.snippet.channelTitle}</h1>
            <h1 className='text-xs truncate' >{card.snippet.description}</h1>
        </div>
        </div>
    </div>
    </Link>
  )
}

export default ResultVideoCard