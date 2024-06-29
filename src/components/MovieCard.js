import React from 'react'
import { IMAGE_CDN } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-32 md:w-40 pr-4'>
            <img src={IMAGE_CDN + posterPath}></img>
        </div>
    )
}

export default MovieCard
