import React from 'react'

const SuggestionsProfiles = () => {
  return (
    <>
        <div className='flex space-x-4 items-center '>
                    <div>
                        <img className='w-8 h-8 rounded-full' src="https://images.unsplash.com/photo-1659644242353-0a8f3c3e9ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold hover:text-gray-500 cursor-pointer'>imadeddine kebour</h1>
                        <h1 className='text-xs text-gray-400'>followed by ...</h1>
                    </div>
                    <div className='pl-2'>
                        <h1 className='font-bold text-blue-600 cursor-pointer text-sm'>Follow</h1>
                    </div>
                </div>
    </>
  )
}

export default SuggestionsProfiles