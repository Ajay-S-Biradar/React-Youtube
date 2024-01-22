import React from 'react'
import { CategoriesList } from '../utils/constants'


const Categories = () => {
  return (
    <div className='flex w-full scrollbar-thin overflow-x-scroll'>
        <div className='flex' >
            {
                CategoriesList.map((x,ind)=>{
                    return (
                        <div key={ind} className='whitespace-nowrap px-3 py-1 text-sm m-2 bg-gray-300 rounded-lg'>
                            {x}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Categories