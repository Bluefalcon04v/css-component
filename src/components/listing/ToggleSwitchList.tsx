import ToggleSwitch from '../toggleSwitch/toggleSwitch'
import { Title } from '../global/title'
import React from 'react'

const ToggleSwitchList = () => {
  return (
    <div className='mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden'>
      <Title title="Toggle Switches" />
      <div className='flex gap-8 flex-wrap'>
        <ToggleSwitch type={'type1'} />
        <ToggleSwitch type={'type2'} />
        <ToggleSwitch type={'type3'} />
      </div>
    </div>
  )
}

export default ToggleSwitchList