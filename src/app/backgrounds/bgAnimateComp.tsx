import Bubble from './components/bubble'
import React from 'react'

export const BGAnimateComp = ({ type }: any) => {
    if (type === "bgAnim1") return (
        <div className='box-container bg-black grow'>
            <Bubble />
        </div>
    )
    if (type === "bgAnim2") return (
        <div className='box-container flex justify-center grow'>
            <div className='w-40 h-20'>
                <video muted autoPlay loop src='https://rejouice.com/assets/videos/RJ-BALL-BLUE-ORANGE-scaled.webm' />
            </div>
        </div>
    )
}