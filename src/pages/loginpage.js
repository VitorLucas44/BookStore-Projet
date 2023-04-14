import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import slices
import { connect } from '../redux/slice/guest';
import { setUsername, setEmail, setPassword, setRegistered } from '../redux/slice/signupSlice';
import {IoBookSharp} from 'react-icons/io5'

const Connexion = () => {
    const dispatch = useDispatch();
    const infoUser = useSelector(state => state.guest);
    const infoSignup = useSelector(state => state.signup);

    const username = useRef();
    const email = useRef();
    const password = useRef();

    const connexionButton = () => {
        if(username.current.value.length >= 3){
            dispatch(connect(username.current.value));
        }
    }

    const signupButton = () => {
        console.log("username:", username.current.value);
        console.log("email:", email.current.value);
        console.log("password:", password.current.value);
        dispatch(setUsername(username.current.value));
        dispatch(setEmail(email.current.value));
        dispatch(setPassword(password.current.value));
        dispatch(setRegistered());
    }

    return (
        <div className='connexion  w-3/4 mx-auto flex justify-center items-center'>
        {(infoUser.connected || infoSignup.registered) ? (
            <div className='flex flex-col justify-center align-center items-center mt-10'>
                <h1 className='text-4xl  font-bold text-center'>
                Bienvenue {infoUser.username || infoSignup.username}
                </h1>
                <div className='w-[200px] mt-5 relative h-[2px] mb-[50px] bg-green-400/50'><div className='h-[15px] absolute -top-2 left-[50%] w-[15px] bg-green-400/40 rotate-45'></div><div className='h-[15px] absolute -top-2 left-[45%] w-[15px] bg-green-400/40 rotate-45'></div></div>
                <IoBookSharp className='text-9xl'/>
            </div>
            ) : (
            <div className='mt-20 border-solid border-2'>
                <h1 className='text-4xl  font-bold text-center'>Connexion</h1>
                <div className='flex justify-center'>
                    <div className='w-[200px] mt-5 relative h-[2px] mb-[50px] bg-green-400/50'><div className='h-[15px] absolute -top-2 left-[50%] w-[15px] bg-green-400/40 rotate-45'></div><div className='h-[15px] absolute -top-2 left-[45%] w-[15px] bg-green-400/40 rotate-45'></div></div>
                </div>
                <div className='flex flex-col mx-auto'>
                <input type="text" placeholder='Username' ref={username} className=' rounded-lg border-white  my-2'/>
                <input type="text" placeholder='Email' ref={email} className=' rounded-lg border-white  my-2'/>
                <input type="password" placeholder='Password' ref={password} className=' rounded-lg border-white  mb-2'/>
                <button className=' bg-green-600 font-bold px-2 rounded-full text-white h-10 mb-2' onClick={() => connexionButton()}>Connexion</button>
                <button className=' bg-green-600 font-bold px-2 rounded-full text-white h-10 mb-2' onClick={() => signupButton()}>Inscription</button>
                </div>
            </div>
            )}
        </div>

    )
}

export default Connexion;