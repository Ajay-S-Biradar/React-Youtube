import React from 'react'
import { Link } from 'react-router-dom';

const ResultVideoCard = ({card}) => {
    console.log(card);
  return (
    <Link to={'/watch?v='+card.id.videoId} >
    <div className='flex gap-3 mx-14 justify-center w-10/12' >
        <div className='' >
            <img className='rounded-xl h-44' src={card?.snippet?.thumbnails?.medium?.url} />
        </div>
        <div className='w-1/2' >
            <h1>{card.snippet.title}</h1>
            <h1>{card.snippet.channelTitle}</h1>
            <h1 className='text-xs truncate' >{card.snippet.description}</h1>
        </div>
    </div>
    </Link>
  )
}

export default ResultVideoCard