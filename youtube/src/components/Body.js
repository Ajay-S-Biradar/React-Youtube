import React from 'react'
import Header from './Header'
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './Home'

const AppLayout =()=>{
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}

const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        children:[{
            path:'/',
            element:<Home />
        }]
    }
])

const Body = () => {
  return (
    <div>
        < RouterProvider router={AppRouter} />
    </div>
  )
}

export default Body