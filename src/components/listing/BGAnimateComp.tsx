import React from 'react'
import { Title } from '../global/title'

const BGAnimateComp = () => {
    return (
        <div className='mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden'>
            <Title title="Background Animation" />
            <div className='box-container place-content-center '>
                <div id='bg-anim1' className='bg-anim-class1'></div>
                <div id='bg-anim2' className='bg-anim-class1'></div>
                <div id='bg-anim3' className='bg-anim-class1'></div>
            </div>
        </div>
    )
}

export default BGAnimateComp