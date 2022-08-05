import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'
import {BsChat} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'

const Post = () => {
  return (
    <div className='bg-white border-[1px] sm:ml-1  sm:w-[500px] mt-2 border-gray rounded-md flex flex-col justify-center'>
        <div className='p-2 flex items-center justify-between'>
            <div className='flex  space-x-2 items-center'>
            <div>
                <img className='h-8 w-8 rounded-full' src="https://images.unsplash.com/photo-1659644242353-0a8f3c3e9ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            </div>
            <div>
                <h1 className='font-bold text-sm cursor-pointer '>imadeddine kebour</h1>
                <h1 className='text-xs '>something...</h1>
            </div>
            </div>

            <div className='text-xl cursor-pointer hover:bg-gray-200 rounded-full p-2'>
            <BsThreeDots/>
            </div>
        </div>

        <div>
            <img className='w-[100%]' src="https://images.unsplash.com/photo-1659644242353-0a8f3c3e9ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>

        <div className='p-4 flex justify-between text-2xl font-bold items-center'>
            <div className='flex space-x-7 font-bold items-center'>
                <div className='cursor-pointer'>
                    <AiOutlineHeart/>
                </div>
                <div className='cursor-pointer'>
                    <BsChat/>
                </div>
                <div className='cursor-pointer'>
                    <FiSend/>
                </div>
            </div>
            <div>
                <div className='cursor-pointer'>
                    <BsBookmark/>
                </div>
            </div>
        </div>

        <div className='pl-5 space-y-2 my-2'>
            <h1 className='text-sm font-bold'>2,297 likes</h1>
            <div>
            <h1 className='text-sm font-bold'>imadeddine kebour</h1>
            <p className='text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, fugit. Autem nulla perspiciatis non odio nostrum. Saepe ut adipisci consequatur explicabo quibusdam beatae harum nobis nostrum exercitationem, quae ullam pariatur.</p>
            </div>
            <h1 className='text-xs text-gray-400'>View all comments</h1>
            <h1 className='text-xs text-gray-300'>23 hours ago</h1>
        </div>
       
    </div>
  )
}

export default Post