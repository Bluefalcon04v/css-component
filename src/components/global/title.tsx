import React from 'react'

export const Title = ({ title }: any) => {
    return (
        <div className={`text-3xl font-semibold my-4 mb-6 `}>
            {title}
        </div>
    )
}


export const BtnTitle = ({ btnTitle }: any) => {
    return (
        <p className='text-sm px-4 py-2'>
            {btnTitle}
        </p>
    )
}