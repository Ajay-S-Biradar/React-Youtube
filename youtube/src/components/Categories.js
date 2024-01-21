import React from 'react'
import { CategoriesList } from '../constants'

const Categories = () => {
  return (
    <div className='flex' >
        {
            CategoriesList.map((x)=>{
                return (
                    <h1 className='px-3 py-1 text-sm m-2 bg-gray-300 rounded-lg'>
                        {x}
                    </h1>
                )
            })
        }
    </div>
  )
}

export default Categories