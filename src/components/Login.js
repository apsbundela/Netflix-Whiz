import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignIn, setSignIn] = useState(true);
    const [validationErrorMessage, setValidationErrorMessage] = useState(null);
    const [formSubmissionErrorMessage, setFormSubmissionErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    //Sign In - Signup Togller
    const signInToggleHandler = () => {
        setSignIn(!isSignIn);
    }

    //Submitting Form
    const submitFormHandler = () => {
        const errorMessage = validate(email.current.value, password.current.value);
        setValidationErrorMessage(errorMessage);
        if (errorMessage !== null) return;

        if (!isSignIn) {
            //Sign Up Form Submission
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                    navigate("/Browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setFormSubmissionErrorMessage(error.code + "-" + error.message)
                });

        } else {
            //Sign In Form Submission
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/Browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
        }


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
            <form onClick={(e) => e.preventDefault()} className=' absolute bg-black w-3/12 p-12 my-60 mx-auto right-0 left-0 text-white bg-opacity-75'>
                <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignIn &&
                    <input
                        className='p-4 my-2 w-full bg-black bg-opacity-50 rounded-lg'
                        ref={name}
                        type='text'
                        placeholder='Full Name'
                    />
                }
                <input
                    className='p-4 my-2 w-full bg-black bg-opacity-50 rounded-lg'
                    ref={email}
                    type='text'
                    placeholder='Email Address'
                />
                <input
                    className='p-4 my-2 w-full bg-black bg-opacity-50 rounded-lg'
                    ref={password}
                    type='password'
                    placeholder='Password'
                />

                <button
                    className='p-4 my-3 w-full bg-red-400 rounded-lg'
                    onClick={submitFormHandler}
                >{isSignIn ? "Sign In" : "Sign Up"}</button>

                <p className='p-2 text-red-500'>{validationErrorMessage}</p>
                <p className='p-2 cursor-pointer' onClick={signInToggleHandler}> {isSignIn ? "New to Netflix? Sign Up Now" : "Already registered. Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login
