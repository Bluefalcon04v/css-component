"use client"
import React, { useState } from 'react'

const ToggleSwitch = ({ type }: any) => {
  const [enabled, setEnabled] = useState(true)
  if (type === 'type1') return (
    <div id=" " className="toggle-comp-container" >
      <div className='col-span-1 px-2 py-4 flex gap-1 w-full place-content-center place-items-center h-full'>
        <div onClick={(e) => { setEnabled(prev => !prev) }} className={`relative w-12 h-6  rounded-full flex justify-start items-start cursor-pointer group ${enabled ? "bg-[#B8B9BA]" : "bg-[#00B69B] "}`} >
          <div className={`absolute w-6 h-6 rounded-full bg-white shadow-inner border-2 group-hover:bg-gray-100 group-hover:ring-1 transition-all ring-gray-400 ${!enabled ? "translate-x-6" : "translate-x-0 "}`} />
        </div>
      </div>
    </div>
  )

  if (type === 'type2') return (
    <div  className="toggle-comp-container" >
      <div className='col-span-1 px-2 py-4 flex gap-1 w-full place-content-center place-items-center h-full'>
        <div  onClick={(e) => { setEnabled(prev => !prev) }} className={`relative w-12 h-6 rounded-sm flex justify-start items-start cursor-pointer group  ${enabled ? "bg-[#B8B9BA] " : " bg-gradient-to-r from-orange-500 via-yellow-400 to-white delay-300"}`} >
          <div id="toggle-switch2" className={`absolute w-6 h-6 rounded-sm bg-white shadow-inner border-2 group-hover:bg-gray-100 group-hover:ring-1 transition-all ring-gray-400 ease-in shadow-black ${!enabled ? "translate-x-6" : "translate-x-0 "}`} />
        </div>
      </div>
    </div>
  )

  // if (type === 'type3') return (
  //   <div  className='toggle-comp-container relative'>
  //     <div className='col-span-1 px-2 py-4 flex gap-1 w-full place-content-center place-items-center h-full'>
  //       <div onClick={(e) => { setEnabled(prev => !prev) }} className={`relative w-12 h-6 rounded-full flex justify-start items-start cursor-pointer group ${enabled ? "bg-[#B8B9BA]" : "bg-[#00B69B] "}`} >
  //         <div className={`absolute w-6 h-6 rounded-full bg-white shadow-inner border-2 group-hover:bg-gray-100 group-hover:ring-1 transition-all ring-gray-400 ${!enabled ? "translate-x-6 " : "translate-x-0 "}`} />
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default ToggleSwitch