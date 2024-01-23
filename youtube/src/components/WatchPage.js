import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { offSidebar, onsidebar } from '../utils/store/sidebarSlice';
import {useLocation, useSearchParams} from  "react-router-dom"

const WatchPage = () => {
  // const location = useLocation();
  // console.log(location.search.split('='))
  const [searchQuery] = useSearchParams();
  console.log(searchQuery.get('v'));
  const videoId = searchQuery.get('v');
    const status = useSelector(store=>store.sidebar.status);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(offSidebar());

        return ()=>{
            dispatch(onsidebar());
        }
    },[]);
  return (
    <div className='w-screen'>
      <div className='w-full bg-black flex justify-center'>
      <iframe className='w-8/12 aspect-video' src={"https://www.youtube.com/embed/"+ videoId}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      <div>

      </div>
    </div>
  )
}

export default WatchPage