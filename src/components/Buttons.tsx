import React from 'react'
import { BtnTitle } from './global/title'

export const Button1 = ({ btnTitle }: any) => {
    return (
        <>
            <div className='group uppercase font-semibold text-white relative cursor-pointer overflow-hidden border-2 px-2 w-fit rounded-full group-hover:bg-white'>
                <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>Hover Me!</span>
                <span className='inline-block p-1 transition duration-500 ease-out absolute left-0 translate-y-[120%] rotate-12 group-hover:translate-y-0 group-hover:rotate-0 px-2 w-full group-hover:bg-white group-hover:text-black'>Hello!! 👋</span>
            </div>
            <BtnTitle btnTitle={btnTitle}/>
        </>
    )
}
