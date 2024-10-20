import VideoComp from '@/src/components/VideoComp'
import { Title } from '@/src/components/title'
import React from 'react'

export const VideoCards = () => {
  return (
<div className="mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden">
      <Title title="Video Card" />
      <div className="flex flex-wrap w-full gap-4 ">
        <VideoComp type="videoComp1" />
      </div>
    </div>  )
}
