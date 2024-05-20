import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-20 absolute bg-gradient-to-r from-black w-screen aspect-video text-white'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div className=''>
                <button className='p-4 px-12 bg-white text-black text-lg rounded-lg hover:bg-opacity-50'>▶️ Play</button>
                <button className=' mx-2 p-4 px-12 bg-gray-500 text-white text-lg bg-opacity-50 rounded-lg'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
