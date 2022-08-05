import React from 'react';
import {GrHomeRounded} from 'react-icons/gr'
import {RiMessengerLine} from 'react-icons/ri'
import {FiPlusSquare} from 'react-icons/fi'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'


const Navbar = () => {
    return (
        <div className='flex justify-between p-4  space-x-10 border-b-[1px] sticky bg-white top-0 w-[100%] items-center '>
            <div className='text-xl font-bold px-3 '>
                Instagram
            </div>
            <div className='flex text-2xl grow justify-between items-center sm:grow-0 sm:space-x-5 '>
                <div className=''>
                    <a className='' href="#">
                        <GrHomeRounded />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <RiMessengerLine/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <FiPlusSquare/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <BiSearch/>
                    </a>
                </div>
                <div className='flex'>
                    <button>
                        <AiOutlineHeart/>
                    </button>
                </div>
                <div className='flex'>
                    <button>
                        <img className='w-6 h-6 rounded-full' src="https://images.unsplash.com/photo-1659644242353-0a8f3c3e9ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
