import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY, YOUTUBE_COMMENTS } from '../utils/constants';

const Comments = ({id}) => {
    console.log(id);
    const [comments,setComments] = useState();
    useEffect(()=>{
        getComments();
    },[])

    const getComments =async ()=>{
        const data =await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${YOUTUBE_API_KEY}&textFormat=plainText&part=snippet&videoId=${id}&maxResults=50`);
        const json =await data.json();
        // console.log(json.items[0]);
        setComments(json.items);
    }
  return (
    <div>
        {comments?.map(comment=>{
            console.log(comment);
            return (   
                <div className='flex m-1 p-1' >
                    <div><img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} className='h-8' /> </div>
                    <h1>{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Comments