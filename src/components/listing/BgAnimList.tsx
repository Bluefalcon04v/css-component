import React from 'react'
import { Title } from '../global/title'
import { BGAnimateComp } from '../BGAnimComp/BGAnimateComp'

const BgAnimList = () => {
  return (
    <div className='mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden'>
    <Title title="Background Animation" />
    <div className='flex flex-wrap w-full gap-4 '>
       <BGAnimateComp type="bgAnim1"/>
       <BGAnimateComp type="bgAnim2"/>
    </div>
</div>
  )
}

export default BgAnimList