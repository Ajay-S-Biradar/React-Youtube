import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { offSidebar, onsidebar } from '../utils/store/sidebarSlice';
import {useLocation, useSearchParams} from  "react-router-dom"
import { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_INFO, YOUTUBE_VIDEO_INFO } from '../utils/constants';
import Comments from './Comments';

const WatchPage = () => {
  // const location = useLocation();
  // console.log(location.search.split('='))
  const [channelInfo,setChannelInfo] = useState();
  const [videoInfo,setVideoInfo] = useState(null);
  const [searchQuery] = useSearchParams();
  const videoId = searchQuery.get('v');
  const channelId = searchQuery.get('c');

  const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(offSidebar());
        getVideoDetails();
        return ()=>{
            dispatch(onsidebar());
        }
    },[]);

    const getVideoDetails =async ()=>{
      const data1 = await fetch(YOUTUBE_VIDEO_INFO+videoId+"&key="+YOUTUBE_API_KEY);
      const data2 = await fetch(YOUTUBE_CHANNEL_INFO+channelId+"&key="+YOUTUBE_API_KEY);
      const json1 = await data1.json();
      const json2 = await data2.json();
      setChannelInfo(json2.items[0])
      setVideoInfo(json1.items[0]);
    }
    
  return (
    <div className='w-screen'>
      <div className='w-full bg-black flex justify-center'>
      <iframe className='w-8/12 aspect-video' src={"https://www.youtube.com/embed/"+ videoId}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className='mt-5 mx-20 flex justify-center flex-col'>
        <div className='text-xl font-semibold' ><h1>{videoInfo?.snippet?.title}</h1></div>
        <div className='flex justify-between'>
          <div className='flex'>
            <div>
              <img className='h-10' src = {channelInfo?.snippet.thumbnails.medium.url} />
            </div>
            <div className='text-lg font-semibold'>{videoInfo?.snippet.channelTitle}</div>
          </div>
          <div className='flex gap-3' >
            <div className='flex' >
              <button className=' text-sm inline-flex items-center rounded-l-full bg-gray-600 bg-opacity-15 hover:bg-opacity-30 p-1 border-r-2 border-opacity-30 border-black'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              </svg>
              {videoInfo?.statistics?.likeCount}
              </button>
              <button className=' text-sm rounded-r-full bg-gray-600 bg-opacity-15 p-1 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
              </svg>
              </button>
            </div>
            <button className='inline-flex rounded-full bg-gray-600 bg-opacity-15 hover:bg-opacity-30 p-1 items-center' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            <h1>Share</h1>
            </button>
            <button className=' text-sm inline-flex rounded-full bg-gray-600 bg-opacity-15 hover:bg-opacity-30 p-1 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download
            </button>
            <button className=' text-sm inline-flex rounded-full bg-gray-600 bg-opacity-15 hover:bg-opacity-30 p-1 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
              </svg>
              Clip
            </button>
            <button className=' text-sm inline-flex rounded-full bg-gray-600 bg-opacity-15 hover:bg-opacity-30 p-1 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            Save
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className='mx-20 my-10'>
          <h1 className='text-2xl font-semibold' >Comments</h1>
          <Comments id={videoId} />
        </div>
      </div>
    </div>
  )
}

export default WatchPage