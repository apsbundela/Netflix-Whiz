import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVTAR } from '../utils/constant';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)
    const signOutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
        });
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
        <div className='w-full absolute px-6 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between'>
            <img
                className='w-44 relative'
                src={LOGO}
                alt='logo'
            />
            <div className='flex'>
                <img src={USER_AVTAR} />
                {user &&
                    <p className='absolute mt-8'>{user.displayName}</p>
                }
                <button className='text-white ml-2' onClick={signOutHandler}>Sign out</button>
            </div>

        </div>
    )
}

export default Header
