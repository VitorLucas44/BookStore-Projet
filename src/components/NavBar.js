import React, { useState } from 'react'
import {CgMenuLeft} from 'react-icons/cg'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import {ImPhone} from 'react-icons/im'
import {ImCross} from 'react-icons/im'
import {AiFillHeart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTask } from '@/redux/slice/bookslice'
import Link from 'next/link';



const NavBar = () => {
    const [side, setSide] = useState('-left-[100%] ')
    const [sideRight, setSideRight] = useState('-right-[100%] hidden')

    const swip = () => {
        setSide('left-0')
    }
    const swipPanier = () =>{
        setSideRight('right-0')
    }
    const croix = () =>{
        setSide('-left-[100%]')
    }
    const croixfavoris = () =>{
        setSideRight('-right-[100%] hidden')
    }
    const dispatch = useDispatch()
    const favbooks = useSelector(state => state.booklist.panier)
    const SuppFavs = (favbook) =>{
        dispatch(removeTask(favbook))
    }

return (
    <>
        <div className='flex justify-between'>
            <div>
                <h1 onClick={swip} className='text-3xl flex'><CgMenuLeft/>
                BookShelf.</h1>
            </div>
            <div className='flex'>
                <h2 className='text-xl'>
                <HiMagnifyingGlass />
                </h2>
                <input placeholder='Search Book' type="text" className='border-solid' />
                
            </div>
            <div className='flex'>
                <span className='text-2xl'>
                    <ImPhone/>
                </span>
                <p>01234567890</p>
                <AiFillHeart className='mx-4 text-2xl' onClick={swipPanier} />
            </div>
            <div className={`absolute z-50 top-0 ${sideRight} duration-300 ease-in-out h-screen   bg-red-500`} style={{width: 300}}>
            <div className='flex justify-between'>
                    <h1 className='text-3xl'>
                        Favoris
                    </h1>
                    <ImCross onClick={croixfavoris}/>
                </div>
                <div>
                    {favbooks.map(favbook =>(
                        <div key={favbook.id} className='flex'>
                            <img src={favbook.image_url}
                            alt="" width={50} />
                            <p>{favbook.title}</p>
                            <ImCross className='cursor-pointer' onClick={() => SuppFavs(favbook)}/>
                            
                        </div>
                    ))}
                </div>
            </div>
            <div className= {`absolute z-50 top-0 ${side} w-20 duration-300 ease-in-out h-screen left bg-red-500`} style={{width: 300}}>
                <div className='flex justify-between'>
                    <h1 className='text-3xl'>
                        ALL BOOK
                    </h1>
                    <ul>
        <li>
          <Link legacyBehavior href="/">
            <a>Modern</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a>Classic</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contact">
            <a>All Book</a>
          </Link>
        </li>
      </ul>
                    <ImCross onClick={croix}/>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default NavBar