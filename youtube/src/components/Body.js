import React from 'react'
import Header from './Header'
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './Home'
import appStore from '../utils/store/appstore'
import { Provider } from 'react-redux'
import SideBar from './SideBar'
import WatchPage from './WatchPage'

const AppLayout =()=>{
    return(
        <>
        <Header />
        <div className='flex'>
        <SideBar />
        <Outlet />
        </div>
        </>
    )
}

const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        children:[{
            path:'/',
            element:<Home />,
            },
            {
                path:'/watch/:x',
                element:<WatchPage />
            }
        ]
    }
])

const Body = () => {
  return (
    <div>
        <Provider store={appStore} >
            < RouterProvider router={AppRouter} />
        </Provider>
    </div>
  )
}

export default Body