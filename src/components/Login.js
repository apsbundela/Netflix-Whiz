import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const [isSignIn, setSignIn] = useState(true);
    const signInToggleHandler = () => {
        setSignIn(!isSignIn);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='background'
                />
            </div>
            <form className=' absolute bg-black w-3/12 p-12 my-60 mx-auto right-0 left-0 text-white bg-opacity-75'>
                <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignIn &&
                    <input
                        className='p-4 my-2 w-full bg-black bg-opacity-50 rounded-lg'
                        type='text'
                        placeholder='Full Name'
                    />
                }
                <input
                    className='p-4 my-2 w-full bg-black bg-opacity-50 rounded-lg'
                    type='text'
                    placeholder='Email Address'
                />
                <input
                    className='p-4 my-2 w-full bg-black bg-opacity-50 rounded-lg'
                    type='password'
                    placeholder='Password'
                />

                <button
                    className='p-4 my-3 w-full bg-red-400 rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>

                <p className='p-2 cursor-pointer' onClick={signInToggleHandler}> {isSignIn ? "New to Netflix? Sign Up Now" : "Already registered. Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login
