import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import CSS
// import '../styles/connexion.css';

// import slices
import { connect } from '../src/redux/slice/guest';

export  const Connexion = () => {
    const dispatch = useDispatch();
    const infoUser = useSelector(state => state.guest);

    const username = useRef();

    const connexionButton = () => {
        if(username.current.value.length >= 3){
            dispatch(connect(username.current.value));
        }
    }

    return (
        <div className='connexion bg-pink-200 w-3/4 mx-auto flex
        justify-center items-center'>
            {!infoUser.connected ? <div>
                <h1 className='text-4xl  font-bold text-center'>Connexion</h1>
                <div className='flex flex-col  mx-auto'>
                    <input type="text" placeholder='Username' ref={username} className='bg-pink-200 rounded-lg border-white  my-2'/>
                    <input type="password" placeholder='Password' className='bg-pink-200 rounded-lg border-white  mb-2'/>
                    <button className='bg-pink-500 font-bold px-2 rounded-full text-white h-10 mb-2' onClick={() => connexionButton()}>Connexion</button>
                </div>
                
            </div> : <div>
                    <h1 className='text-4xl  font-bold text-center'>Bienvenue {infoUser.username}</h1>
                </div>}
            
            
        </div>
    )
}

export default Connexion;