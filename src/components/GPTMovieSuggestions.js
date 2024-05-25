import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
    const { gptMovieNames, gptMovieResults } = useSelector((store) => store.gpt)

    if (!gptMovieNames || !gptMovieResults || gptMovieNames.length === 0 || gptMovieResults.length === 0) return null; return (
        <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
            <div>
                {gptMovieNames.map((movieName, index) => (
                    <MovieList
                        key={movieName}
                        title={movieName}
                        movies={gptMovieResults[index]}
                    />
                ))}
            </div>
        </div>
    )
}

export default GPTMovieSuggestions
