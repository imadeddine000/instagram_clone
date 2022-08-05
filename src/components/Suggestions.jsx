import React from 'react'
import SuggestionsProfiles from './SuggestionsProfiles'
const Suggestions = () => {
  return (
    <div className='hidden lg:flex flex-col '>
        <div>
            <div className='flex space-x-5  items-center pt-8 '>
                <div>
                    <img className='h-14 w-14 rounded-full' src="https://images.unsplash.com/photo-1659644242353-0a8f3c3e9ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-bold text-lg'>idhtag</h1>
                    <h1 className='text-gray-400 text-sm '>imadeddine kebour</h1>
                </div>
                <div>
                    <h1 className='text-blue-600 font-bold cursor-pointer  '>Switch</h1>
                </div>
            </div>
        </div>

        <div className='mt-5'>
            <div className='flex justify-between'>
                 <h1 className='text-gray-400 text-md font-bold'>Suggestions for you</h1>
                 <h1 className='font-bold cursor-pointer'>See All</h1>
            </div>
            <div className='mt-5 space-y-2 p-1'>
                <SuggestionsProfiles/>
                <SuggestionsProfiles/>
                <SuggestionsProfiles/>
                <SuggestionsProfiles/>
            </div>
        </div>
    </div>
  )
}

export default Suggestions