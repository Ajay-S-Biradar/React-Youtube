import React from 'react'
import Categories from './Categories'
import PopularCards from './PopularCards'

const Home = () => {
  return (
    <div className='flex overflow-hidden' >
      <div className='flex flex-col overflow-hidden' >
          <Categories />
          <PopularCards />
      </div>
    </div>
  )
}

export default Home