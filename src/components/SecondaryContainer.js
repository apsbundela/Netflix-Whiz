import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const moviesStore = useSelector((store) => store.movie)
    return (
        moviesStore && (
            <div className='bg-black'>
                <div className='-mt-52 relative z-20'>
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
