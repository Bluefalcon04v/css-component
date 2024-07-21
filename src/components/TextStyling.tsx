import React from 'react'

export const TextStyling = ({ type }: any) => {
    if (type === 'text1') return (
        <div className='text-container'>
            <div id='textS1' className=' textS'>Text Style</div>
        </div>
    )

    if (type === 'text2') return (
        <div className='text-container'>
            <div id='textS2' className='textS'>Text Style</div>
        </div>
    )
    if (type === 'text3') return (
        <div className='text-container overflow-hidden'>
            <div id='textS3' className='textS bg-[#f7ca05] '>Text Style</div>
        </div>
    )
    if (type === 'text4') return (
        <div className='text-container overflow-hidden'>
            <div id='textS4' className='textS'>Text Style</div>
        </div>
    )
}
