import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { offSidebar, onoffSidebar, onsidebar } from '../utils/store/sidebarSlice';

const WatchPage = () => {
    const status = useSelector(store=>store.sidebar.status);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(offSidebar());

        return ()=>{
            dispatch(onsidebar());
        }
    },[]);
  return (
    <div>WatchPage</div>
  )
}

export default WatchPage