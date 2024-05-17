import React from 'react'
import Login from './Login'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
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
