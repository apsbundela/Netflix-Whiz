import React from 'react'
import { LOGIN_BACKGROUND_IMAGE } from '../utils/constant'
import GptSearchBar from './GptSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GptSearch = () => {
    return (
        <div >
            <div className='fixed -z-20'>
                <img src={LOGIN_BACKGROUND_IMAGE} alt='logo' />
            </div>
            <GptSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}

export default GptSearch
