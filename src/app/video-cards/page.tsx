'use client'
import { Title } from '@/src/components/title'
import { usePathname } from 'next/navigation';
import { Button } from '@/src/components';
import VideoComp from './videoCards'
import React from 'react'
interface IProps {
  url: string;
}
const VideoCards = ({ url = '' }: IProps) => {
  const pathname = usePathname()
  return (
    <div className="mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden">
      <Title title="Video Card" />
      <div className="flex flex-wrap w-full gap-4 ">
        <VideoComp type="videoComp1" />
      </div>
      {pathname !== '/video-cards' && <Button url={url} />}
    </div>
  )
}

export default VideoCards