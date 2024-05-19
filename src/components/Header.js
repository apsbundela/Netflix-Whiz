import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    console.log(user)
    const signOutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")

        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='w-full absolute px-6 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between'>
            <img
                className='w-44 relative'
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='logo'
            />
            <div className='flex'>
                <img src='https://occ-0-1946-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e' />
                {user &&
                    <p className='absolute mt-8'>{user.displayName}</p>
                }
                <button className='text-white ml-2' onClick={signOutHandler}>Sign out</button>
            </div>

        </div>
    )
}

export default Header
