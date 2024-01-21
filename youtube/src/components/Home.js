import React from 'react'
import Categories from './Categories'
import PopularCards from './PopularCards'

const Home = () => {
  return (
    <div className='flex flex-col' >
        <Categories />
        <PopularCards />
    </div>
  )
}

export default Home