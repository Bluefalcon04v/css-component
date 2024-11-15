'use client'
import { Title } from '@/src/components/title'
import { usePathname } from 'next/navigation';
import ToggleSwitch from './toggleSwitches';
import { Button } from '@/src/components';
import React from 'react'
interface IProps {
  url: string;
}

const ToggleSwitches = ({ url = '' }: IProps) => {
  const pathname = usePathname()

  return (
    <div className='mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden'>
      <Title title="Toggle Switches" />
      <div className='flex gap-8 flex-wrap'>
        <ToggleSwitch type={'type1'} />
        <ToggleSwitch type={'type2'} />
        <ToggleSwitch type={'type3'} />
      </div>
      {pathname !== '/toggle-switches' && <Button url={url} />}
    </div>
  )
}

export default ToggleSwitches