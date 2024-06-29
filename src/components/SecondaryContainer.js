import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const moviesStore = useSelector((store) => store.movie)
    return (
        moviesStore && (
            <div className='bg-black'>
                <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
                    <MovieList title={"Now Playing"} movies={moviesStore?.movies} />
                    <MovieList title={"Top Rated"} movies={moviesStore?.topRatedMovies} />
                    <MovieList title={"Popular"} movies={moviesStore?.popularMovies} />
                    <MovieList title={"Upcoming"} movies={moviesStore?.upComingMovies} />
                </div>
            </div>

        )
    )
}

export default SecondaryContainer
