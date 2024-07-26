import React from 'react'
import { Title } from '../global/title'
import MousePointerComp from '../MousePointerComp/MousePointerComp'

export const MousePointerList = () => {
  return (
    <div className="mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden">
      <Title title="Mouse Pointers" />
      <div className="flex flex-wrap w-full gap-4 ">
        <MousePointerComp type="mousepointer1" />
      </div>
    </div>
  )
}
