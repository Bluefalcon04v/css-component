'use client'
import MousePointerComp from '@/src/app/mouse-pointers/mousePointer'
import { Title } from '@/src/components/title'
import { usePathname } from 'next/navigation';
import { Button } from '@/src/components';
import React from 'react'

const MousePointers = () => {
  const pathname = usePathname()

  return (
    <div className="mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden">
      <Title title="Mouse Pointers" />
      <div className="flex flex-wrap w-full gap-4 ">
        <MousePointerComp type="mousepointer1" />
      </div>
      {pathname !== '/mouse-pointers' && <Button url={"mouse-pointers"} />}
    </div>
  )
}

export default MousePointers