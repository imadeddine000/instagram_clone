import React from 'react'

const StoryCircle = () => {
  return (
    <div className='p-2 cursor-pointer '>
        <div className='bg-white-900 w-16 h-16 bg-white border-2 border-red-600 flex items-center justify-center rounded-full'>
            <img className='w-14 h-14 hover:opacity-90  rounded-full object-cover' src="https://images.unsplash.com/photo-1659644242353-0a8f3c3e9ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
         <div className='text-center text-xs '>
            <h1>random</h1>
         </div>
    </div>
  )
}

export default StoryCircle