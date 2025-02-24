import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 p-4 flex justify-between bg-gray-800 w-full h-14'>
        <div className='flex gap-2'>
            <div>
                Logo
            </div>
            <div>
                Exponential
            </div>
        </div>
    </div>
  )
}

export default Navbar
