import React from 'react'
import { useSelector } from 'react-redux'
import FullSidebar from './FullSidebar';
import MiniSidebar from './MiniSidebar';

const SideBar = () => {
  const sidebarStatus = useSelector(store=>store.sidebar.status);
  const watch = useSelector(store=>store.sidebar.watch);
  return (
    <div className='flex flex-col' >
      {sidebarStatus?<FullSidebar/> : watch? ""  : <MiniSidebar /> }
    </div>
  )
}

export default SideBar