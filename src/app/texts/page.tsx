'use client'
import { Title } from '@/src/components/title'
import { usePathname } from 'next/navigation';
import { Button } from '@/src/components'
import { TextStyling } from './texts'
import React from 'react'

const Texts = () => {
    const pathname = usePathname()
    return (
        <div className='mx-auto px-8 py-8 w-11/12 glass-container overflow-hidden'>
            <Title title="Text Effects" />
            <div className='flex gap-8 flex-wrap'>
                <TextStyling type="text1" />
                <TextStyling type="text2" />
                <TextStyling type="text3" />
                <TextStyling type="text4" />
            </div>
            {pathname !== '/texts' && <Button url={"texts"} />}
        </div>
    )
}

export default Texts