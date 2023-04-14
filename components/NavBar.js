import React, { useState } from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { ImPhone } from 'react-icons/im';
import { ImCross } from 'react-icons/im';
import { AiFillHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTask } from '@/redux/slice/bookslice';
import Link from 'next/link';
import LoginPage from '../src/pages/loginpage';
import {CgProfile} from 'react-icons/cg'

export const NavBar = () => {
    const [side, setSide] = useState('-left-[100%] ');
    const [sideRight, setSideRight] = useState('-right-[100%] hidden');

    const swip = () => {
        setSide('left-0');
    };
    const swipPanier = () => {
        setSideRight('right-0');
    };
    const croix = () => {
        setSide('-left-[100%]');
    };
    const croixfavoris = () => {
        setSideRight('-right-[100%] hidden');
    };
    const dispatch = useDispatch();
    const favbooks = useSelector((state) => state.booklist.panier);
    const SuppFavs = (favbook) => {
        dispatch(removeTask(favbook));
    };

    const [userEmail, setUserEmail] = useState(''); // état de l'email de l'utilisateur connecté

    return (
        <>
        <div className='navbar flex justify-between align-center items-center'>
            <div>
            <h1 onClick={swip} className='text-3xl flex cursor-pointer'>
                <CgMenuLeft />
                <a className='ml-3' href="/">BookShelf.</a>
            </h1>
            </div>
            <div className='flex'>
            <h2 className='text-xl searchlogo'>
                <HiMagnifyingGlass />
            </h2>
            <input placeholder='Search Book' type='text' className='border-solid border-2 border-black-600 bg-slate-300 rounded' />
            </div>
            <div className='flex divcoeur'>
            <span className='text-2xl phone'>
                <ImPhone />
            </span>
            <p className='mr-5'>01234567890</p>
            {userEmail ? (
                <p>{userEmail}</p>
                ) : (
                <Link legacyBehavior href="/loginpage">
                <a className='text-xl flex text-center align-center items-center'><CgProfile/></a>
                </Link>
                )}
            <AiFillHeart className='mx-4 text-2xl cursor-pointer' onClick={swipPanier} />
            </div>
            <div
            className={`absolute z-50 top-0 ${sideRight} duration-300 ease-in-out h-screen   bg-white`}
            style={{ width: 300 }}
            >
            <div className='flex justify-between flex justify-between bg-slate-100 h-20 align-center text-center items-center'>
            <ImCross className='mx-auto cursor-pointer' onClick={croixfavoris} />
                <h1 className='text-3xl font-bold mx-auto'>Favoris</h1>
            </div>
                    <div className='ml-6 mt-10'>
                        {favbooks.map(favbook =>(
                            <div key={favbook.id} className='flex mt-5'>
                                <img src={favbook.image_url}
                                alt="" width={50} />
                                <p className='ml-2'>{favbook.title}</p>
                                <ImCross className='cursor-pointer mx-auto' onClick={() => SuppFavs(favbook)}/>
                                
                            </div>
                        ))}
                    </div>
                </div>
                <div className= {`absolute z-50 top-0 ${side} w-20 duration-300 ease-in-out h-screen left bg-white`} style={{width: 300}}>
                    <div className='flex justify-between bg-slate-100 h-20 align-center text-center items-center	'>
                        <h1 className='text-3xl font-bold mx-auto	'>
                            ALL BOOK
                        </h1>
                        <ImCross className='mx-auto cursor-pointer' onClick={croix}/>
                        </div>
                        <div className='flex-col ml-9'>
                        <ul className='mt-5'>
            <li className='mt-5 font-bold hover:text-green-700'>
            <Link legacyBehavior href="/">
                <a className=''>Modern</a>
            </Link>
            </li>
            <li className='mt-5 font-bold hover:text-green-700'>
            <Link legacyBehavior href="/about">
                <a>Classic</a>
            </Link>
            </li>
            <li className='mt-5 font-bold hover:text-green-700'>
            <Link legacyBehavior href="/all-book">
                <a>All Book</a>
            </Link>
            </li>
        </ul>
                        </div>

                </div>
            </div>
            
        </>
    )
}

export default NavBar