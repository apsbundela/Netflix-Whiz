import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-6 md:px-20 absolute bg-gradient-to-r from-black w-screen aspect-video text-white'>
            <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
            <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
            <div className='my-4 md:m-0'>
                <button className='px-3 md:px-12 py-1 md:py-4 bg-white text-black text-lg rounded-lg hover:bg-opacity-50'>▶️ Play</button>
                <button className=' hidden md:inline-block mx-2 p-4 px-12 bg-gray-500 text-white text-lg bg-opacity-50 rounded-lg'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
