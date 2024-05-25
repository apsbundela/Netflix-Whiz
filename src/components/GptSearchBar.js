import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from './languageConstant'

const GptSearchBar = () => {
    const langCode = useSelector((store) => store.config.lang)
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input type='text' className='p-4 m-4 col-span-9' placeholder={lang?.[langCode]?.placeholder}></input>
                <button className='py-2 px-4 bg-red-700 m-4 col-span-3 rounded-lg text-white'>{lang?.[langCode]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
