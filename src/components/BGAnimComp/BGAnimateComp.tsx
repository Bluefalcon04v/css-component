import React from 'react'
import { Title } from '../global/title'
import Bubble from './Bubble'

export const BGAnimateComp = ({ type }: any) => {
    if (type === "bgAnim1") return (
        <div className='box-container'>
            <div id='bg-anim1' className='bg-anim-class1'></div>
            <div id='bg-anim2' className='bg-anim-class1'></div>
            <div id='bg-anim3' className='bg-anim-class1'></div>
        </div>
    )
    if (type === "bgAnim2") return (
        <div className='box-container bg-black'>
            <Bubble/>
        </div>
    )
}