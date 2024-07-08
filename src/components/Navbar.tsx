import React from 'react'

export const Navbar = () => {
  return (
    <>
      <div className='h-20 w-11/12 mb-8 m-auto text-white flex justify-between items-center font-bold '>
        <div>
          <h1 className="text-6xl font-black  uppercase text-stroke text-white">component css</h1>
        </div>
        <div className='flex list-none gap-8 '>
          <li className='glass-container px-4 py-2 cursor-pointer border border-transparent hover:bg-[#00ffff39] hover:border-[#00ffff42]'>Buttons</li>
          <li className='glass-container px-4 py-2 cursor-pointer border border-transparent hover:bg-[#00ffff39] hover:border-[#00ffff42]'>Cards</li>
        </div>
      </div>
    </>
  )
}