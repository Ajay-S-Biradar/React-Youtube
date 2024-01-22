import React from 'react'

const FullSidebar = () => {
  return (
    <div className='p-2 m-2 px-4'>
        <div className='font-semibold flex gap-3 flex-col'>
            <h1>Home</h1>
            <h1>Shorts</h1>
            <h1>Subscription</h1>
        </div>
        <div className='mt-10 flex gap-3 flex-col' >
            <h1 className='font-bold' >You</h1>
            <h1>You Channel</h1>
            <h1>You History </h1>
            <h1>Watch Later</h1>
            <h1>You Videos </h1>
            <h1>Liked Videos</h1>
        </div>
    </div>
  )
}

export default FullSidebar