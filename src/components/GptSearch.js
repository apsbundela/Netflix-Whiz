import React from 'react'
import { LOGIN_BACKGROUND_IMAGE } from '../utils/constant'
import GptSearchBar from './GptSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GptSearch = () => {
    return (
        <>
            <div className='fixed -z-20'>
                <img className='h-screen object-cover' src={LOGIN_BACKGROUND_IMAGE} alt='logo' />
            </div>
            <div className='pt-[30%] md:p-0'>
                <GptSearchBar />
                <GPTMovieSuggestions />
            </div>
        </>

    )
}

export default GptSearch
