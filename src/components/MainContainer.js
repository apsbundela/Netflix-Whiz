import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import WarningLine from './WarningLine'
import { API_EXPIRED_WARNING_MESSAGE } from '../utils/constant'

const MainContainer = () => {
    const movies = useSelector((store) => store.movie?.movies)
    if (!movies) return;
    const movie = movies[0]
    const { original_title, overview, id } = movie;
    return (
        <div className='pt-[30%] bg-black md:pt-0'>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer
