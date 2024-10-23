'use client'
import Link from 'next/link';
import React from 'react'
interface IButton {
    url: string;
    title?: string;
}

const Button = ({url, title = 'more > >'}: IButton) => {
  return (
    <>
     <Link href={url} className='w-full relative my-4 flex justify-end font-semibold'>
        <div>{title}</div>
    </Link>
    </>
  )
}

export default Button