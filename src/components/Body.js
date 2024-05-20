import React, { useEffect } from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'


const Body = () => {
    const appRoute = createBrowserRouter([

        {
            path: '/',
            element: <Login />
        },
        {
            path: '/Browse',
            element: <Browse />
        }
    ])

    return (
        <div>
            <RouterProvider router={appRoute} />
        </div>
    )
}

export default Body
