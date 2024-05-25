import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from './languageConstant'
import openai from '../utils/openai'
import { API_OPTION } from '../utils/constant'
import { addGptMoviesResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const langCode = useSelector((store) => store.config.lang)
    const dispatch = useDispatch();
    // const searchText = useRef(null);
    // const gptSearchQuery = "Act as Movie Recommendation system and suggest some movies for the query: " + searchText.current.value + ". only give me names of 5 movie comma seperated like the Example result given ahead. Example: koi mil gya, Gadar,Spider man , Iron man,Hulk  "

    const searchTmdbMovies = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie, API_OPTION)
        const json = await data.json();
        return json.results;
    }

    const handleGPTSearch = async () => {
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptSearchQuery }],
        //     model: 'gpt-3.5-turbo',
        // });

        // if (!gptResults) {

        // }
        //const gptMovies = gptResults.choices?.[0]?.messages?.content;

        const gptMovies = ['Andaz Apna Apna', 'Phir Hera Pheri', 'Gadar', 'Chupke Chupke', 'Padosan']
        const promiseArray = gptMovies.map((movie) => searchTmdbMovies(movie))

        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMoviesResult({ names: gptMovies, movieResults: tmdbResults }))

    }
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input type='text' className='p-4 m-4 col-span-9' placeholder={lang?.[langCode]?.placeholder}></input>
                <button className='py-2 px-4 bg-red-700 m-4 col-span-3 rounded-lg text-white' onClick={handleGPTSearch}>{lang?.[langCode]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
