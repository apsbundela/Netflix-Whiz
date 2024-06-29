import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { API_EXPIRED_WARNING_MESSAGE, LOGO, SUPPORTED_LANGUAGES, USER_AVTAR } from '../utils/constant';
import { setGptToggle } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import WarningLine from './WarningLine';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)
    const isGptSearch = useSelector((store) => store.gpt.isGptSearch)

    // const isSearch = useSelector((store) => store.gpt.isGptSearch)
    const signOutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
        });
    }

    const handleToggle = () => {
        dispatch(setGptToggle())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate("/Browse")
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/")
            }
        });

        //unsunscribe the event when component unmount
        return () => unsubscribe();

    }, [])
    return (
        <div className='w-full absolute px-6 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row items-center justify-between'>
            <img
                className='w-44 mx-auto md:mx-0 relative'
                src={LOGO}
                alt='logo'
            />
            {
                !user && (
                    <WarningLine textPosition={30} text={API_EXPIRED_WARNING_MESSAGE} speed={50} />
                )
            }
            {user && (
                <div className='flex p-2 items-center '>
                    {
                        isGptSearch &&
                        <select className='p-2 m-2 bg-gray-600 text-white' onChange={handleLanguageChange}>
                            {
                                SUPPORTED_LANGUAGES.map((lang) => (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))
                            }
                        </select>
                    }

                    <button className=' bg-red-600 py-2 px-4 m-3 text-white'
                        onClick={handleToggle}
                    >{isGptSearch ? "Home" : "GPT Search"}</button>
                    <img className='hidden md:inline-block w-12 h-12' src={USER_AVTAR} />
                    {/* <p className='absolute -mr-12 mt-8 text-white'>{user.displayName}</p> */}
                    <button className='text-white ml-2' onClick={signOutHandler}>Sign out</button>
                </div>

            )}



        </div>
    )
}

export default Header
