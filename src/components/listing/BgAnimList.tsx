import React from 'react'
import { Title } from '../global/title'
import { BGAnimateComp } from '../BGAnimateComp'

const BgAnimList = () => {
  return (
    <div className='mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden'>
    <Title title="Background Animation" />
    <div className='box-container'>
       <BGAnimateComp type="bgAnim1"/>
    </div>
</div>
  )
}

export default BgAnimList